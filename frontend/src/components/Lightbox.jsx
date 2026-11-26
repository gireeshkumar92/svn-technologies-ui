import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ImageSlot from './ImageSlot.jsx';

export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return undefined;
    const go = (d) => onChange((index + d + items.length) % items.length);
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [open, index, items.length, onChange, onClose]);

  const item = open ? items[index] : null;
  const step = (d) => onChange((index + d + items.length) % items.length);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <button className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close viewer"><X size={24} /></button>
          <button className="lightbox__btn lightbox__prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft size={28} /></button>
          <motion.figure key={item.id} className="lightbox__fig" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
            <ImageSlot name={item.image} alt={item.caption} label={item.caption} ratio="4 / 3" zoom={false} />
            <figcaption>{item.caption} <span>{index + 1} / {items.length}</span></figcaption>
          </motion.figure>
          <button className="lightbox__btn lightbox__next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight size={28} /></button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
