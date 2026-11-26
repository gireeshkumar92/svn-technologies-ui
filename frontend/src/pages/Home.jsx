import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutConfig, homeConfig } from '../config/index.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import StatsBand from '../components/StatsBand.jsx';
import ServiceHighlights from '../components/ServiceHighlights.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Process from '../components/Process.jsx';
import CTABand from '../components/CTABand.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Home() {
  usePageTitle('');
  const { intro } = homeConfig;
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container split">
          <Reveal direction="left" className="split__text">
            <h2>{intro.title}</h2>
            {intro.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <Link to={intro.cta.to} className="btn btn--outline">{intro.cta.label} <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal direction="right" className="split__media">
            <ImageSlot name={intro.image} alt="SVN Technologies workshop" label="Workshop photo" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <StatsBand />
      <ServiceHighlights />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={aboutConfig.bestAt.title} text="Six capabilities that carry a part from drawing to delivery." />
          <FeatureGrid items={aboutConfig.bestAt.items} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={aboutConfig.why.title} text={aboutConfig.why.text} />
          <FeatureGrid items={aboutConfig.why.items} />
        </div>
      </section>

      <Process />
      <CTABand />
      <ContactSection idPrefix="home" />
    </>
  );
}
