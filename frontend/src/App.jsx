import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollControls from './components/ScrollControls.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { QuoteProvider } from './components/QuoteContext.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Reset scroll on page change. The services page handles its own deep links (/services/aerospace).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.startsWith('/services')) window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* HashRouter keeps URLs like /#/services, so no file paths appear and refresh works on GitHub Pages. */}
      <HashRouter>
        <QuoteProvider>
          <ScrollToTop />
          <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
          <TopBar />
          <Header />
          <main id="main" tabIndex={-1}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
          <ScrollControls />
        </QuoteProvider>
      </HashRouter>
    </MotionConfig>
  );
}
