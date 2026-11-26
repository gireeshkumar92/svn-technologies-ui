import { homeConfig } from '../config/index.js';
import { useCountUp } from '../hooks/useCountUp.js';

function Stat({ value, suffix, label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div className="stat">
      <strong ref={ref}>{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats on-dark" aria-label="At a glance">
      <div className="container stats__grid">
        {homeConfig.stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  );
}
