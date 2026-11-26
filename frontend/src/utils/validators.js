const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v, limits = { message: 1000 }) {
  const e = {};
  const name = v.name.trim();
  const digits = v.phone.replace(/\D/g, '');
  if (name.length < 2) e.name = 'Enter your full name.';
  if (!/^[+()\d\s-]+$/.test(v.phone) || digits.length < 10 || digits.length > 13)
    e.phone = 'Enter a valid contact number, 10 to 13 digits.';
  if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email address, like name@company.com.';
  if (v.subject.trim().length < 3) e.subject = 'Enter or choose a subject.';
  const m = v.message.trim();
  if (m.length < 10) e.message = 'Tell us a little more: at least 10 characters.';
  else if (m.length > limits.message) e.message = `Keep the message under ${limits.message} characters.`;
  return e;
}
