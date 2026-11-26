import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/index.js';
import ContactForm from './ContactForm.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const { contact, address } = siteConfig;

export default function ContactSection({ heading = true, idPrefix = 'contact' }) {
  return (
    <section className="section section--alt" aria-labelledby={`${idPrefix}-title`}>
      <div className="container">
        {heading && <SectionHeading title="Contact us" text="Send your drawing details or questions and we will get back to you." />}
        <div className="contact">
          <Reveal direction="left" className="contact__info">
            <h3 id={`${idPrefix}-title`}>Contact details</h3>
            <ul>
              <li><Phone size={20} /><div><span>Contact number</span><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></div></li>
              <li><Mail size={20} /><div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></li>
              <li><MapPin size={20} /><div><span>Address</span><address>{address.lines.map((l) => <span key={l}>{l}</span>)}</address></div></li>
              <li><Clock size={20} /><div><span>Working hours</span><p>{contact.hours}</p></div></li>
            </ul>
            {address.showMap && (
              <iframe
                className="contact__map" title="SVN Technologies location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address.mapQuery)}&output=embed`}
              />
            )}
          </Reveal>
          <Reveal direction="right" className="contact__form">
            <h3>Send us a message</h3>
            <ContactForm idPrefix={`${idPrefix}-form`} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
