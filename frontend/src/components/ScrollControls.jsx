import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Reading progress bar plus up / down buttons.
export default function ScrollControls() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const [pos, setPos] = useState({ top: false, bottom: false });

  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPos({ top: window.scrollY > 500, bottom: max > 600 && window.scrollY < max - 400 });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);

  const go = (top) => window.scrollTo({ top, behavior: 'smooth' });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
      <div className="scroll-ctl">
        {pos.top && <button onClick={() => go(0)} aria-label="Scroll to top"><ChevronUp size={22} /></button>}
        {pos.bottom && <button onClick={() => go(document.documentElement.scrollHeight)} aria-label="Scroll to bottom"><ChevronDown size={22} /></button>}
      </div>
    </>
  );
}
