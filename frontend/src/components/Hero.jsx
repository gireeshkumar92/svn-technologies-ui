import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { homeConfig, siteConfig } from '../config/index.js';
import { useAutoSlide } from '../hooks/useAutoSlide.js';
import ImageSlot from './ImageSlot.jsx';
import ToolpathArt from './ToolpathArt.jsx';
import { Icon } from '../utils/icons.jsx';
import { useQuote } from './QuoteContext.jsx';

const slides = homeConfig.heroSlides;
const delay = siteConfig.banner.autoSlideMs;

export default function Hero() {
  const [hover, setHover] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const paused = hover || manualPause;
  const { index, setIndex, next, prev } = useAutoSlide(slides.length, delay, paused);
  const ref = useRef(null);
  const { openQuote } = useQuote();
  const s = slides[index];

  return (
    <section
      ref={ref} className="hero on-dark" aria-roledescription="carousel" aria-label="Highlights"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={s.id} className="hero__bg"
          initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <ImageSlot name={s.image} alt={s.title} label={`Banner image: ${s.id}`} ratio="auto" zoom={false} priority />
        </motion.div>
      </AnimatePresence>
      <div className="hero__shade" />
      <ToolpathArt />

      <div className="container hero__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id} className="hero__copy" aria-live="polite"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero__icon"><Icon name={s.icon} size={26} /></span>
            <h1>{s.title}</h1>
            <p>{s.text}</p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to={s.cta.to}>{s.cta.label} <ArrowRight size={18} /></Link>
              <button className="btn btn--ghost" onClick={() => openQuote()}>Request a quote</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container hero__controls">
        <div className="hero__dots" role="tablist" aria-label="Choose slide">
          {slides.map((sl, i) => (
            <button
              key={sl.id} role="tab" aria-selected={i === index} aria-label={`Slide ${i + 1}: ${sl.title}`}
              className={`hero__dot ${i === index ? 'is-active' : ''}`} onClick={() => setIndex(i)}
            >
              {i === index && (
                <span key={`${index}-${manualPause}`} className={`hero__fill ${paused ? 'is-paused' : ''}`} style={{ animationDuration: `${delay}ms` }} />
              )}
            </button>
          ))}
        </div>
        <div className="hero__arrows">
          <button onClick={() => setManualPause((p) => !p)} aria-label={manualPause ? 'Play slideshow' : 'Pause slideshow'}>
            {manualPause ? <Play size={18} /> : <Pause size={18} />}
          </button>
          <button onClick={prev} aria-label="Previous slide"><ChevronLeft size={22} /></button>
          <button onClick={next} aria-label="Next slide"><ChevronRight size={22} /></button>
        </div>
      </div>

      <button
        className="hero__down" aria-label="Scroll down"
        onClick={() => ref.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
