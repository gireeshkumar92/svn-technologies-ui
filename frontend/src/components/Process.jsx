import { homeConfig } from '../config/index.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Process() {
  const { title, text, steps } = homeConfig.process;
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading title={title} text={text} />
        <ol className="process">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.07} className="process__step">
              <span className="process__n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
