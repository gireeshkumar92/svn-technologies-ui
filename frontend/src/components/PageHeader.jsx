import { motion } from 'framer-motion';
import ToolpathArt from './ToolpathArt.jsx';

export default function PageHeader({ title, text }) {
  return (
    <header className="page-header on-dark">
      <ToolpathArt subtle />
      <div className="container">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {text}
          </motion.p>
        )}
      </div>
    </header>
  );
}
