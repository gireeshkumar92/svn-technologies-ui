import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { galleryConfig } from '../config/index.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import PageHeader from '../components/PageHeader.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import Lightbox from '../components/Lightbox.jsx';

export default function Gallery() {
  usePageTitle('Gallery');
  const [cat, setCat] = useState('All');
  const [index, setIndex] = useState(null);
  const shown = useMemo(() => galleryConfig.items.filter((i) => cat === 'All' || i.category === cat), [cat]);
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <PageHeader {...galleryConfig.header} />
      <section className="section">
        <div className="container">
          <div className="chips-row" role="group" aria-label="Filter gallery">
            {galleryConfig.categories.map((c) => (
              <button key={c} className={`chip ${cat === c ? 'is-active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <motion.div layout className="gallery">
            <AnimatePresence mode="popLayout">
              {shown.map((it, i) => (
                <motion.button
                  layout key={it.id} className="gallery__item" onClick={() => setIndex(i)} aria-label={`Open image: ${it.caption}`}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }}
                >
                  <ImageSlot name={it.image} alt={it.caption} label={it.caption} ratio="4 / 3" />
                  <span className="gallery__cap"><ZoomIn size={18} />{it.caption}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
          {!shown.length && <p className="empty">No images in this category yet.</p>}
        </div>
      </section>
      <Lightbox items={shown} index={index} onClose={close} onChange={setIndex} />
    </>
  );
}
