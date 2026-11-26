import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config/index.js';
import { useQuote } from './QuoteContext.jsx';
import Reveal from './Reveal.jsx';

export default function CTABand({ title = 'Have a drawing ready?', text = 'Send the details and we will confirm feasibility, timeline and a quotation.' }) {
  const { openQuote } = useQuote();
  return (
    <section className="cta on-dark">
      <Reveal className="container cta__inner">
        <div><h2>{title}</h2><p>{text}</p></div>
        <div className="cta__actions">
          <button className="btn btn--primary" onClick={() => openQuote()}>Request a quote <ArrowRight size={18} /></button>
          <a className="btn btn--ghost" href={`tel:${siteConfig.contact.phoneHref}`}><Phone size={18} /> {siteConfig.contact.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
