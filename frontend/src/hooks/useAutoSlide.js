import { useCallback, useEffect, useState } from 'react';

export function useAutoSlide(length, delay, paused) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);

  useEffect(() => {
    if (paused || length < 2) return undefined;
    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [index, paused, delay, length, next]);

  return { index, setIndex, next, prev };
}
