// Gallery slots. `image` is a file name in /frontend/images. Categories drive the filter chips.
const slot = (n, category, caption) => ({
  id: `g${n}`,
  image: `gallery-${String(n).padStart(2, '0')}.jpg`,
  category,
  caption,
});

export const galleryConfig = {
  header: {
    title: 'Gallery',
    text: 'A look at our components, machines and workshop. Photos are being added.',
  },
  categories: ['All', 'Aerospace', 'Defence', 'Workshop'],
  items: [
    slot(1, 'Aerospace', 'Precision aerospace bracket'),
    slot(2, 'Defence', 'Defence housing component'),
    slot(3, 'Workshop', 'CNC machining in progress'),
    slot(4, 'Aerospace', 'Machined flange'),
    slot(5, 'Workshop', 'Inspection and measurement'),
    slot(6, 'Defence', 'Precision shaft set'),
    slot(7, 'Aerospace', 'Prototype for fit check'),
    slot(8, 'Workshop', 'Tooling and fixtures'),
    slot(9, 'Defence', 'Batch ready for dispatch'),
    slot(10, 'Aerospace', 'Surface finish check'),
    slot(11, 'Workshop', 'Shop floor'),
    slot(12, 'Defence', 'Mounting plate'),
  ],
};
