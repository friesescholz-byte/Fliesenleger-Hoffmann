import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadFunnel from './components/LeadFunnel';
import LegalModals from './components/LegalModals';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [funnelModalOpen, setFunnelModalOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  // Prevent background scroll on mobile when modal is active
  useEffect(() => {
    if (funnelModalOpen || activeLegalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [funnelModalOpen, activeLegalModal]);

  const openFunnelModal = () => {
    setFunnelModalOpen(true);
  };

  const closeFunnelModal = () => {
    setFunnelModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#111827] flex flex-col font-sans selection:bg-[#C26725]/20 selection:text-[#9A4C16]">
        {/* Navigation Header */}
        <Header onOpenFunnel={openFunnelModal} />

        {/* Main Content Routed Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenFunnel={openFunnelModal} />} />
            <Route path="/projekte" element={<ProjectsPage onOpenFunnel={openFunnelModal} />} />
            <Route path="/ueber-uns" element={<AboutPage onOpenFunnel={openFunnelModal} />} />
            <Route path="*" element={<HomePage onOpenFunnel={openFunnelModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

        {/* Pop-up Lead Funnel Modal (Triggered instantly on any button click) */}
        {funnelModalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            onClick={closeFunnelModal}
          >
            <div 
              className="relative max-w-2xl w-full my-8 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <LeadFunnel isModal={true} onClose={closeFunnelModal} />
            </div>
          </div>
        )}

        {/* Legal Impressum & Privacy Modals */}
        <LegalModals 
          activeModal={activeLegalModal} 
          onClose={() => setActiveLegalModal(null)} 
        />
      </div>
    </BrowserRouter>
  );
}
