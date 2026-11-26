import { motion } from 'framer-motion';

// Scroll-triggered entrance. direction: up | left | right | none
export default function Reveal({ children, direction = 'up', delay = 0, className = '', as = 'div' }) {
  const offsets = { up: { y: 28 }, left: { x: -36 }, right: { x: 36 }, none: {} };
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
