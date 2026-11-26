import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { resolveImage } from '../utils/images.js';

// Shows the real image when the file exists in /frontend/images, otherwise a labelled placeholder.
export default function ImageSlot({ name, alt = '', label, ratio = '4 / 3', className = '', zoom = true, priority = false }) {
  const [failed, setFailed] = useState(false);
  const src = resolveImage(name);
  const showImage = src && !failed;

  return (
    <div className={`slot ${zoom ? 'slot--zoom' : ''} ${className}`} style={{ aspectRatio: ratio }}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="slot__placeholder" role="img" aria-label={alt || label || 'Image placeholder'}>
          <ImageIcon size={28} aria-hidden="true" />
          <span className="slot__label">{label || alt || 'Image'}</span>
          {name && <code className="slot__file">images/{name}</code>}
        </div>
      )}
    </div>
  );
}
