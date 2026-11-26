// Services content. Only these two services are shown for now. To add a service, add an object here.
// `components` and `materials` are indicative examples: edit them to match your actual capabilities.
export const servicesConfig = {
  header: {
    title: 'Services',
    text: 'Precision CNC machining for aerospace and defence, supported by prototyping, development support and inspection.',
  },
  items: [
    {
      slug: 'aerospace',
      icon: 'plane',
      title: 'Aerospace Components',
      summary: 'Precision-machined parts to customer-approved drawings, material specifications and tolerances.',
      image: 'service-aerospace.jpg',
      strip: ['service-aerospace-1.jpg', 'service-aerospace-2.jpg', 'service-aerospace-3.jpg'],
      intro: [
        'Aerospace parts leave very little room for error. We machine components to customer-approved drawings, material specifications and dimensional tolerances, and check them against the acceptance criteria agreed with you.',
        'From a single prototype for a fit check to repeat production runs, our team plans material, machining and inspection together so that parts arrive right and on schedule.',
      ],
      components: [
        'Structural brackets and fittings',
        'Housings and enclosures',
        'Precision shafts, bushes and spacers',
        'Flanges, plates and mounting parts',
        'Fixtures and assembly aids',
        'Custom parts to customer design',
      ],
      capabilities: [
        'Multi-axis CNC milling and turning',
        'Tight dimensional tolerances',
        'Surface finish control',
        'Prototype to production batches',
        'Machining feasibility review',
        'Material and dispatch planning',
      ],
      materials: ['Aluminium alloys', 'Stainless steels', 'Alloy steels', 'Titanium', 'Engineering plastics'],
      quality: [
        'Incoming material checked against specification',
        'In-process dimensional checks on critical features',
        'Final inspection of dimensions, finish and workmanship',
        'Inspection records shared as agreed with the customer',
      ],
    },
    {
      slug: 'defence',
      icon: 'shield',
      title: 'Defence Components',
      summary: 'Dependable, carefully inspected components for demanding defence applications.',
      image: 'service-defence.jpg',
      strip: ['service-defence-1.jpg', 'service-defence-2.jpg', 'service-defence-3.jpg'],
      intro: [
        'Defence programmes need parts that fit, perform and arrive when promised. We manufacture components to customer specifications with controlled materials, strict quality checks and clear coordination of schedules.',
        'We review each design for machining feasibility, support approved design modifications and keep you informed as production progresses.',
      ],
      components: [
        'Precision housings and casings',
        'Mounts, brackets and supports',
        'Shafts, pins and sleeves',
        'Connector and interface parts',
        'Test and handling fixtures',
        'Custom parts to customer design',
      ],
      capabilities: [
        'CNC milling and turning',
        'Repeatable batch production',
        'Design and development support',
        'Rapid prototyping',
        'Production coordination and tracking',
        'Delivery planning to agreed timelines',
      ],
      materials: ['Alloy steels', 'Stainless steels', 'Aluminium alloys', 'Brass and bronze', 'Engineering plastics'],
      quality: [
        'Drawing and specification review before machining',
        'Stage-wise inspection of critical dimensions',
        'Surface finish and workmanship checks',
        'Traceable inspection records as agreed with the customer',
      ],
    },
  ],
  faq: [
    { q: 'Can you work from our drawings?', a: 'Yes. We manufacture to customer-approved drawings, material specifications and tolerances. If something cannot be machined as drawn, we raise it during the feasibility review.' },
    { q: 'Do you make prototypes before production?', a: 'Yes. Prototype components can be produced for design evaluation, fit checks and assembly validation before you commit to production.' },
    { q: 'How do you check quality?', a: 'Critical dimensions, surface finish and workmanship are checked against your specification and agreed acceptance criteria, using modern testing equipment.' },
    { q: 'How do I request a quotation?', a: 'Use the Request a quote button or the contact form with your drawing details, material, quantity and required delivery date.' },
  ],
};
