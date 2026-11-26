// Home page content. Image values are file names inside /frontend/images.
export const homeConfig = {
  heroSlides: [
    {
      id: 'aerospace',
      icon: 'plane',
      title: 'Aerospace components machined to the drawing',
      text: 'Precision CNC parts built to customer-approved drawings, material specifications and dimensional tolerances.',
      image: 'hero-aerospace.jpg',
      cta: { label: 'Aerospace components', to: '/services/aerospace' },
    },
    {
      id: 'defence',
      icon: 'shield',
      title: 'Defence components you can depend on',
      text: 'Careful material control, strict inspection and dependable delivery for demanding defence programmes.',
      image: 'hero-defence.jpg',
      cta: { label: 'Defence components', to: '/services/defence' },
    },
    {
      id: 'prototype',
      icon: 'cog',
      title: 'Prototypes before production',
      text: 'Prototype components for design evaluation, fit checks and assembly validation, with machining feasibility support.',
      image: 'hero-cnc.jpg',
      cta: { label: 'Our core services', to: '/services' },
    },
    {
      id: 'quality',
      icon: 'clipboard',
      title: 'Inspected against your acceptance criteria',
      text: 'Dimensions, surface finish and workmanship are checked with modern testing equipment at every stage.',
      image: 'hero-quality.jpg',
      cta: { label: 'Why choose SVN', to: '/about' },
    },
  ],

  intro: {
    title: 'Industrial moulds, aerospace and defence components under one roof',
    paragraphs: [
      'We specialise in manufacturing industrial plastic moulds, aerospace components and defence components. Each component is manufactured with careful attention to dimensional accuracy, material quality and customer specifications.',
      'Supported by skilled employees, advanced CNC machinery and modern testing equipment, we maintain strict quality controls throughout production. Our focus on consistent quality, dependable service and on-time delivery helps customers meet their manufacturing requirements with confidence.',
    ],
    image: 'about-workshop.jpg',
    cta: { label: 'About SVN Technologies', to: '/about' },
  },

  // Edit the numbers freely; they animate when scrolled into view.
  stats: [
    { value: 2, suffix: '', label: 'Sectors served: aerospace and defence' },
    { value: 4, suffix: '', label: 'Core services under one roof' },
    { value: 6, suffix: '', label: 'Capability areas from drawing to dispatch' },
    { value: 100, suffix: '%', label: 'Work to customer-approved drawings' },
  ],

  servicesHighlight: {
    title: 'Two sectors, one standard of precision',
    text: 'Select a sector to see the components, capabilities and quality checks behind it.',
  },

  process: {
    title: 'From drawing to dispatch',
    text: 'A clear sequence keeps every order predictable.',
    steps: [
      { title: 'Drawing review', text: 'We study the drawing, material and tolerance requirements.' },
      { title: 'Feasibility', text: 'Machining feasibility is reviewed and design changes are agreed with you.' },
      { title: 'Prototype', text: 'Optional prototypes for fit checks and assembly validation.' },
      { title: 'Production', text: 'CNC machining is scheduled and progress is monitored.' },
      { title: 'Inspection', text: 'Dimensions, finish and workmanship are checked against acceptance criteria.' },
      { title: 'Dispatch', text: 'Material and dispatch are planned for timely delivery.' },
    ],
  },
};
