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
    email: 'svntechnologies2123@gmail.com',
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
  // mode 'endpoint' : POSTs JSON to the Google Apps Script web app in /backend (saves to Google Sheet + sends email).
  // mode 'mailto'   : fallback that opens the visitor's email app (no backend needed).
  form: {
    mode: 'endpoint',
    // Paste the Web app URL from the Apps Script deployment (ends with /exec). See backend/README.md.
    endpoint: 'https://script.google.com/macros/s/AKfycby0FsoJ2rlZRI6vkcz_6MalfmlSYSsxXezOBns4j43PpZAesJvBgUfmr2vxwSXMgGz2Iw/exec',
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
