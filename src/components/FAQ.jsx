import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS, COMPANY } from '../data/content';
import HeroButton from './HeroButton';

export default function FAQ({ onOpenFunnel }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09182B] text-white text-xs font-black uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F59725]" />
            HÄUFIGE FRAGEN & ANTWORTEN
          </div>

          <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            KLARTEXT ZU KOSTEN, <br />
            <span className="text-[#C66030]">ABLAUF & UMSETZUNG.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal pt-1">
            Hier finden Sie ehrliche Antworten auf die wichtigsten Fragen rund um Ihre Badsanierung und Fliesenarbeiten.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#F59725] bg-[#FAF9F6] shadow-md' 
                    : 'border-neutral-200/80 bg-white hover:border-[#F59725]/50 hover:bg-[#FAF9F6]/50'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#09182B]">
                    {faq.q}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${
                    isOpen 
                      ? 'bg-[#F59725] text-white border-[#F59725] rotate-180 shadow-xs' 
                      : 'bg-white border-neutral-200 text-neutral-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-[#F59725]/20 font-normal">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-14 bg-[#09182B] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#F59725]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F59725] text-[#09182B] flex items-center justify-center shrink-0 hidden sm:flex shadow-md">
              <HelpCircle className="w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg sm:text-xl text-white">
                Haben Sie eine spezielle Frage zu Ihrem Projekt?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Rufen Sie Kingsley Hoffmann direkt an oder schreiben Sie uns kurz über das Formular.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY.phoneClean}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59725]" />
              <span>{COMPANY.phone}</span>
            </a>
            <HeroButton
              onClick={onOpenFunnel}
              size="sm"
              className="w-full sm:w-auto"
            >
              Online anfragen
            </HeroButton>
          </div>
        </div>

      </div>
    </section>
  );
}
