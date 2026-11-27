import { useState } from 'react';
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from 'lucide-react';
import { siteConfig } from '../config/index.js';
import { validateContact } from '../utils/validators.js';

const { form: formCfg, contact } = siteConfig;
const empty = { name: '', phone: '', email: '', subject: '', message: '', website: '' };

export default function ContactForm({ initialSubject = '', idPrefix = 'contact', onSent }) {
  const [values, setValues] = useState({ ...empty, subject: initialSubject });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validateContact(next, formCfg.limits));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validateContact(values, formCfg.limits));
  };

  async function submit(e) {
    e.preventDefault();
    if (values.website) return; // honeypot: bots fill hidden fields
    const found = validateContact(values, formCfg.limits);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, subject: true, message: true });
    if (Object.keys(found).length) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and send again.' });
      document.getElementById(`${idPrefix}-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    setStatus({ type: 'loading', message: '' });
    const payload = {
      name: values.name.trim(), phone: values.phone.trim(), email: values.email.trim(),
      subject: values.subject.trim(), message: values.message.trim(),
    };

    try {
      if (formCfg.mode === 'endpoint') {
        if (!formCfg.endpoint) throw new Error('config');
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), formCfg.timeoutMs);
        // text/plain avoids a CORS preflight, which Google Apps Script web apps do not answer.
        const res = await fetch(formCfg.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ ...payload, website: values.website }),
          signal: ctrl.signal,
        }).finally(() => clearTimeout(timer));
        if (!res.ok) throw new Error(`http-${res.status}`);
        const data = await res.json().catch(() => null);
        if (!data || data.ok !== true) {
          const e = new Error('server');
          e.serverMessage = data && data.error;
          throw e;
        }
        setStatus({ type: 'success', message: 'Thank you. Your enquiry has been received and our team will contact you soon.' });
      } else {
        const body = `Name: ${payload.name}\nContact number: ${payload.phone}\nEmail: ${payload.email}\n\n${payload.message}`;
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
        setStatus({ type: 'success', message: 'Your email app should open with the message ready. Press send there to complete your enquiry.' });
      }
      setValues({ ...empty });
      setTouched({});
      onSent?.();
    } catch (err) {
      const aborted = err.name === 'AbortError';
      setStatus({
        type: 'error',
        message: err.serverMessage
          ? err.serverMessage
          : aborted
          ? 'The request took too long. Check your connection and try again.'
          : `We could not send your message. Please try again, or call ${contact.phone} or email ${contact.email}.`,
      });
    }
  }

  const field = (key, label, props = {}) => {
    const id = `${idPrefix}-${key}`;
    const err = touched[key] && errors[key];
    const Tag = props.as || 'input';
    return (
      <div className={`field ${err ? 'field--error' : ''} ${props.full ? 'field--full' : ''}`}>
        <label htmlFor={id}>{label}</label>
        <Tag
          id={id} name={key} value={values[key]} onChange={set(key)} onBlur={blur(key)}
          aria-invalid={err ? 'true' : 'false'} aria-describedby={err ? `${id}-err` : undefined}
          {...props.attrs}
        />
        {err && <span id={`${id}-err`} className="field__error">{errors[key]}</span>}
      </div>
    );
  };

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form__grid">
        {field('name', 'Name', { attrs: { type: 'text', autoComplete: 'name' } })}
        {field('phone', 'Contact number', { attrs: { type: 'tel', autoComplete: 'tel', inputMode: 'tel' } })}
        {field('email', 'Email', { attrs: { type: 'email', autoComplete: 'email' } })}
        {field('subject', 'Subject', { attrs: { type: 'text', list: `${idPrefix}-subjects` } })}
        <datalist id={`${idPrefix}-subjects`}>{formCfg.subjects.map((s) => <option key={s} value={s} />)}</datalist>
        {field('message', 'Message', { full: true, as: 'textarea', attrs: { rows: 5, maxLength: formCfg.limits.message + 200 } })}
        <div className="hp" aria-hidden="true">
          <label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} name="website" /></label>
        </div>
      </div>

      <div className="form__foot">
        <button className="btn btn--primary" type="submit" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? <><LoaderCircle className="spin" size={18} /> Sending</> : <><Send size={18} /> Send message</>}
        </button>
        <span className="form__count">{values.message.length}/{formCfg.limits.message}</span>
      </div>

      <div aria-live="polite">
        {status.type === 'success' && <p className="notice notice--ok"><CircleCheck size={18} /> {status.message}</p>}
        {status.type === 'error' && <p className="notice notice--err" role="alert"><TriangleAlert size={18} /> {status.message}</p>}
      </div>
    </form>
  );
}
