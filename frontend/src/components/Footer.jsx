import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig, servicesConfig } from '../config/index.js';
import { Logo } from './Header.jsx';

const { contact, address, nav, tagline, name } = siteConfig;

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__tag">{tagline}</p>
          <p className="footer__about">{siteConfig.description}</p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>{servicesConfig.items.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
            <li><Mail size={16} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><MapPin size={16} /><span>{address.lines.slice(1).join(', ')}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bar">
        <span>&copy; {new Date().getFullYear()} {name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
