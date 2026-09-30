import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import { COMPANY } from '../data/content';
import HeroButton from './HeroButton';

export default function Header({ onOpenFunnel }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Startseite', path: '/', isHome: true },
    { label: 'Leistungen', path: '/#leistungen', isAnchor: true, targetId: 'leistungen' },
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'Projekte', path: '/projekte' },
    { label: 'FAQ', path: '/#faq', isAnchor: true, targetId: 'faq' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.isHome) {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (link.isAnchor) {
      if (location.pathname === '/') {
        const el = document.getElementById(link.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${link.targetId}`);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Sleek, Modern Navigation Bar */}
      <nav 
        className={`transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#091524]/95 backdrop-blur-md shadow-xl border-neutral-800/80 py-3' 
            : 'bg-[#091524]/85 backdrop-blur-md border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clean Brand Logo linking to homepage */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img 
              src="/logo-icon.webp" 
              alt="Kingsley Hoffmann Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight font-display">
                Kingsley Hoffmann
              </span>
              <span className="text-[11px] text-[#F59725] font-bold tracking-wider uppercase">
                Ihr Fliesenleger • Fachbetrieb
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isRouteActive = !link.isAnchor && location.pathname === link.path;

              if (link.isHome || link.isAnchor) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`text-sm font-semibold transition-colors cursor-pointer ${
                      link.isHome && location.pathname === '/'
                        ? 'text-[#F59725] font-bold'
                        : 'text-neutral-300 hover:text-[#F59725]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${
                    isRouteActive ? 'text-[#F59725] font-bold' : 'text-neutral-300 hover:text-[#F59725]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs: Direct Call & Consultation */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F59725] group-hover:border-[#F59725] transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold">{COMPANY.phone}</span>
            </a>
            <HeroButton
              onClick={onOpenFunnel}
              size="sm"
              icon={ArrowRight}
            >
              Traumbad anfragen
            </HeroButton>
          </div>

          {/* Mobile Menu Toggle Button with 44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl text-neutral-200 hover:bg-white/10 active:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F59725]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#091524]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => {
                const isActive = !link.isAnchor && location.pathname === link.path;

                if (link.isHome || link.isAnchor) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link)}
                      className={`text-left text-base font-bold py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                        link.isHome && location.pathname === '/'
                          ? 'text-[#F59725]'
                          : 'text-neutral-200 active:text-[#F59725]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold py-3.5 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#F59725]' : 'text-neutral-200 active:text-[#F59725]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="w-full h-12 flex items-center justify-center gap-2.5 rounded-xl border border-white/15 text-white font-bold text-sm bg-white/5 active:bg-white/10 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#F59725]" />
                <span>Direkt anrufen: {COMPANY.phone}</span>
              </a>
              <div>
                <HeroButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFunnel();
                  }}
                  size="sm"
                  className="w-full"
                  icon={ArrowRight}
                >
                  Traumbad anfragen
                </HeroButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[-1] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
