import { usePageTitle } from '../hooks/usePageTitle.js';
import PageHeader from '../components/PageHeader.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Contact() {
  usePageTitle('Contact');
  return (
    <>
      <PageHeader title="Contact us" text="Call, email or send your drawing details. We reply with feasibility and timelines." />
      <ContactSection heading={false} idPrefix="page" />
    </>
  );
}
