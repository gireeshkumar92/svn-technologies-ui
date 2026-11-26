import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { homeConfig, servicesConfig } from '../config/index.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import ImageSlot from './ImageSlot.jsx';
import { Icon } from '../utils/icons.jsx';

export default function ServiceHighlights() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading {...homeConfig.servicesHighlight} />
        <div className="svc-cards">
          {servicesConfig.items.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.12}>
              <Link to={`/services/${s.slug}`} className="svc-card">
                <ImageSlot name={s.image} alt={s.title} label={s.title} ratio="16 / 10" />
                <div className="svc-card__body">
                  <span className="svc-card__icon"><Icon name={s.icon} size={24} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="link-arrow">View {s.title.toLowerCase()} <ArrowUpRight size={18} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
