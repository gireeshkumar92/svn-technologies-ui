import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { aboutConfig, servicesConfig } from '../config/index.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Accordion from '../components/Accordion.jsx';
import CTABand from '../components/CTABand.jsx';
import { Icon } from '../utils/icons.jsx';
import { useQuote } from '../components/QuoteContext.jsx';

const { items, header, faq } = servicesConfig;

function ServiceBlock({ s, alt }) {
  const { openQuote } = useQuote();
  return (
    <section id={s.slug} className={`section service ${alt ? "section--alt" : ""}`} aria-labelledby={`${s.slug}-title`}>
      <div className="container">
        <Reveal className="service__head">
          <span className="service__icon"><Icon name={s.icon} size={30} /></span>
          <h2 id={`${s.slug}-title`}>{s.title}</h2>
        </Reveal>

        <div className="split split--top">
          <Reveal direction="left" className="split__text">
            {s.intro.map((p) => <p key={p}>{p}</p>)}
            <button className="btn btn--primary" onClick={() => openQuote(`${s.title} enquiry`)}>Enquire about {s.title.toLowerCase()}</button>
          </Reveal>
          <Reveal direction="right"><ImageSlot name={s.image} alt={s.title} label={s.title} ratio="16 / 10" /></Reveal>
        </div>

        <div className="strip">
          {s.strip.map((img, i) => (
            <Reveal key={img} delay={i * 0.1}><ImageSlot name={img} alt={`${s.title} example ${i + 1}`} label={`${s.title} ${i + 1}`} ratio="4 / 3" /></Reveal>
          ))}
        </div>

        <div className="lists">
          <Reveal className="panel"><h3>Typical components</h3><ul className="ticks">{s.components.map((c) => <li key={c}><Check size={16} />{c}</li>)}</ul></Reveal>
          <Reveal delay={0.1} className="panel"><h3>Capabilities</h3><ul className="ticks">{s.capabilities.map((c) => <li key={c}><Check size={16} />{c}</li>)}</ul></Reveal>
          <Reveal delay={0.2} className="panel">
            <h3>Materials</h3>
            <ul className="chips">{s.materials.map((m) => <li key={m}>{m}</li>)}</ul>
            <h3 className="panel__sub">Quality checks</h3>
            <ul className="ticks">{s.quality.map((c) => <li key={c}><Check size={16} />{c}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  usePageTitle('Services');
  const { slug } = useParams();
  const [active, setActive] = useState(items[0].slug);

  useEffect(() => {
    if (!slug) { window.scrollTo({ top: 0 }); return; }
    const t = setTimeout(() => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    setActive(slug);
    return () => clearTimeout(t);
  }, [slug]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    items.forEach((s) => { const el = document.getElementById(s.slug); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <PageHeader {...header} />
      <nav className="tabs" aria-label="Services">
        <div className="container tabs__inner">
          {items.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className={`tabs__link ${active === s.slug ? 'is-active' : ''}`}>
              <Icon name={s.icon} size={18} /> {s.title}
            </Link>
          ))}
        </div>
      </nav>

      {items.map((s, i) => <ServiceBlock key={s.slug} s={s} alt={i % 2 === 1} />)}

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={aboutConfig.coreServices.title} text="Support that applies to both aerospace and defence work." />
          <FeatureGrid items={aboutConfig.coreServices.items} columns={2} />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="Common questions" />
          <Accordion items={faq} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
