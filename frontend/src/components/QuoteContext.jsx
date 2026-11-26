import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import Modal from './Modal.jsx';
import ContactForm from './ContactForm.jsx';

const QuoteContext = createContext({ openQuote: () => {} });
export const useQuote = () => useContext(QuoteContext);

export function QuoteProvider({ children }) {
  const [state, setState] = useState({ open: false, subject: '' });
  const openQuote = useCallback((subject = 'Request for quotation') => setState({ open: true, subject }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const value = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <Modal open={state.open} onClose={close} title="Request a quote">
        <p className="modal__lead">Share your drawing details, material, quantity and delivery date. We will reply by email or phone.</p>
        <ContactForm initialSubject={state.subject} idPrefix="quote" onSent={() => setTimeout(close, 2600)} />
      </Modal>
    </QuoteContext.Provider>
  );
}
