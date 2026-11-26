import { aboutConfig } from '../config/index.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import CTABand from '../components/CTABand.jsx';

export default function About() {
  usePageTitle('About');
  const { header, story, coreServices, bestAt, why } = aboutConfig;
  return (
    <>
      <PageHeader {...header} />

      <section className="section">
        <div className="container split split--top">
          <Reveal direction="left" className="split__text">
            <h2>{story.title}</h2>
            {story.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal direction="right" className="stack">
            <ImageSlot name={story.images[0]} alt="Our team" label="Team photo" ratio="16 / 9" />
            <ImageSlot name={story.images[1]} alt="Our facility in Peenya" label="Facility photo" ratio="16 / 9" />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={coreServices.title} />
          <FeatureGrid items={coreServices.items} columns={2} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={bestAt.title} />
          <FeatureGrid items={bestAt.items} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title={why.title} text={why.text} />
          <FeatureGrid items={why.items} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
