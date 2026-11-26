export default function ToolpathArt({ subtle = false }) {
  return (
    <svg className={`toolpath ${subtle ? 'toolpath--subtle' : ''}`} viewBox="0 0 800 500" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect className="toolpath__stock" x="140" y="80" width="560" height="340" rx="6" />
        <path className="toolpath__cut" pathLength="1" d="M200 140 H640 V360 H200 Z" />
        <path className="toolpath__cut toolpath__cut--2" pathLength="1" d="M250 190 H590 V310 H250 Z" />
        <path className="toolpath__cut toolpath__cut--3" pathLength="1" d="M300 250 H540" />
        <circle className="toolpath__hole" cx="420" cy="250" r="34" />
        <circle className="toolpath__hole toolpath__hole--s" cx="420" cy="250" r="12" />
        <path className="toolpath__dim" d="M140 450 H700 M140 440 V460 M700 440 V460" />
        <path className="toolpath__dim" d="M740 80 V420 M730 80 H750 M730 420 H750" />
      </g>
      <text className="toolpath__text" x="420" y="475" textAnchor="middle">± 0.01</text>
    </svg>
  );
}
