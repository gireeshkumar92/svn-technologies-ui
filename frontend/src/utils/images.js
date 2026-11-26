// Resolves file names from /frontend/images. Missing files return undefined, so the UI shows a placeholder.
const files = import.meta.glob('/images/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const map = {};
Object.entries(files).forEach(([path, url]) => {
  map[path.split('/').pop()] = url;
});

export const resolveImage = (name) => (name ? map[name] : undefined);
