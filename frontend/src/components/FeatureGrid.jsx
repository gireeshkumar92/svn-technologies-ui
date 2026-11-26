import Reveal from './Reveal.jsx';
import { Icon } from '../utils/icons.jsx';

export default function FeatureGrid({ items, columns = 3 }) {
  return (
    <div className={`features features--${columns}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % columns) * 0.08} className="feature">
          <span className="feature__icon"><Icon name={it.icon} size={26} /></span>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
