import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Phone, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY, IMAGES } from '../data/content';
import HeroButton from './HeroButton';

export default function Statement({ onOpenFunnel }) {
  return (
    <section id="ueber-uns" className="relative bg-gradient-to-b from-[#09182A] via-[#0B1E34] to-[#071322] text-white pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden">
      
      {/* Top Organic Wave Transition (Light to Dark) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg 
          viewBox="0 0 1440 64" 
          preserveAspectRatio="none" 
          className="w-full h-8 sm:h-12 lg:h-16 text-white fill-current"
        >
          <path d="M0,0 L1440,0 L1440,32 C1200,64 960,10 600,48 C300,64 120,20 0,32 Z" />
        </svg>
      </div>

      {/* Organic Background Ambient Lighting & Gradients */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Clean Photo of Kingsley Hoffmann with Van (No overlay text, clean border) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/20 shadow-2xl group">
              <img
                src={IMAGES.owner}
                alt="Kingsley Hoffmann vor dem Firmenfahrzeug in Liebenau"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Statement & Personal Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F59725] text-xs font-black uppercase tracking-widest border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#F59725]" />
                PERSÖNLICHE VERANTWORTUNG
              </div>

              <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                „FLIESENLEGEN IST KEIN JOB FÜR <br />
                <span className="text-[#F59725] underline decoration-white/20 decoration-2">HALBE SACHEN.“</span>
              </h2>
            </div>

            {/* Handwerker Statement Quote Card */}
            <div className="relative bg-white/5 backdrop-blur-xs rounded-2xl p-7 sm:p-9 border border-white/15 shadow-xl space-y-4 group hover:border-[#F59725]/50 transition-colors">
              <Quote className="w-10 h-10 text-[#F59725]/40 mb-2" strokeWidth={1.5} />
              
              <blockquote className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal italic">
                „Wer schlampig abdichtet oder Fugen krumm zieht, zerstört eine Investition für Jahrzehnte. Bei uns gibt es kein Gewerkegerangel: Sie haben mich als festen Ansprechpartner von der Planung bis zur Abnahme – und wir verlassen Ihre Baustelle erst, wenn jede Kante millimetergenau sitzt.“
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="block font-display font-extrabold text-sm uppercase text-white tracking-wide">
                    Kingsley Hoffmann
                  </span>
                  <span className="text-xs text-neutral-400">
                    Ihr Fliesenleger • Liebenau & Region Nienburg
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#F59725] bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Liebenau</span>
                </div>
              </div>
            </div>

            {/* Direct CTAs matching Hero Style */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <HeroButton
                onClick={onOpenFunnel}
                size="md"
                className="w-full sm:w-auto"
              >
                Vor-Ort-Termin vereinbaren
              </HeroButton>

              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/20 hover:border-white text-white font-semibold text-sm hover:bg-white/5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#F59725]" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>

            {/* Clean link to dedicated Über uns page */}
            <div className="pt-2">
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-extrabold uppercase text-[#F59725] hover:text-white transition-colors tracking-wider group"
              >
                <span>Mehr über Kingsley & unsere Werte erfahren</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Organic Wave Transition (Dark to Light) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg 
          viewBox="0 0 1440 64" 
          preserveAspectRatio="none" 
          className="w-full h-8 sm:h-12 lg:h-16 text-[#FAF9F6] fill-current"
        >
          <path d="M0,32 C360,0 720,64 1080,24 C1260,8 1380,48 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>

    </section>
  );
}
