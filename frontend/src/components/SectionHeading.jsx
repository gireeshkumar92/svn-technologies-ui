import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, text, align = 'left', as: H = 'h2' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <H>{title}</H>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
