import { Mail, Phone } from 'lucide-react';
import { siteConfig } from '../config/index.js';

const { contact, tagline } = siteConfig;

// Contact number and email sit at the top right so they are always one tap away.
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span className="topbar__tag">{tagline}</span>
        <div className="topbar__contact">
          <a href={`tel:${contact.phoneHref}`} aria-label={`Call ${contact.phone}`}><Phone size={15} /><span>{contact.phone}</span></a>
          <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}><Mail size={15} /><span>{contact.email}</span></a>
        </div>
      </div>
    </div>
  );
}
