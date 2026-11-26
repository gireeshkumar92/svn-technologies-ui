// Global site settings. Edit this file to change name, contact details, menus and form behaviour.
export const siteConfig = {
  name: 'SVN Technologies',
  shortName: 'SVN',
  tagline: 'PRECISION · PERFORMANCE · TRUST',
  description:
    'Precision CNC machining of aerospace and defence components, industrial plastic moulds and custom parts from Peenya, Bengaluru.',

  contact: {
    phone: '+91 87224 75245',
    phoneHref: '+918722475245',
    email: 'madangowda16@gmail.com',
    hours: 'Mon to Sat, 9:00 AM to 6:00 PM', // sample value: update to your working hours
  },

  address: {
    lines: ['SVN Technologies', 'Peenya Industrial Area', 'Bengaluru, Karnataka, India'], // add plot / pin code
    mapQuery: 'Peenya Industrial Area, Bengaluru, Karnataka, India',
    showMap: true,
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],

  // Contact form behaviour.
  // mode 'mailto'   : opens the visitor's email app with the message filled in (works with no backend).
  // mode 'endpoint' : POSTs JSON to `endpoint` (use this once your backend / form service is ready).
  form: {
    mode: 'mailto',
    endpoint: '',
    timeoutMs: 15000,
    subjects: [
      'Aerospace components enquiry',
      'Defence components enquiry',
      'Request for quotation',
      'Prototype or development support',
      'General enquiry',
    ],
    limits: { message: 1000 },
  },

  banner: { autoSlideMs: 6500 },
};
