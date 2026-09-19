import React from 'react';
import { Star, ShieldCheck, UserCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="relative bg-[#09182B] text-white py-10 sm:py-12 border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting - Subtle and centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact, Clean Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] font-display font-black uppercase tracking-[0.25em] text-[#F59725] mb-1.5">
            LIEBENAU • MARKLOHE • REGION NIENBURG
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl lg:text-3xl text-white">
            QUALITÄT AUS EINER HAND
          </h2>
        </div>

        {/* Exactly 3 Clean, Compact Columns with Cool Rotating Icon Animation on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          
          {/* 1. Google 5 Sterne */}
          <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59725]/40 hover:bg-white/[0.05] transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:rotate-12 group-hover:scale-110 group-hover:border-[#F59725] transition-transform duration-300 ease-out">
              {/* Official Google 4-Color Icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F59725] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <h3 className="font-display font-bold text-base text-white leading-snug">
                5 Sterne auf Google
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mt-0.5">
                Höchste Kundenzufriedenheit durch regionale Bauherren
              </p>
            </div>
          </div>

          {/* 2. Festpreis-Garantie */}
          <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59725]/40 hover:bg-white/[0.05] transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-[#F59725]/15 text-[#F59725] border border-[#F59725]/30 flex items-center justify-center shrink-0 group-hover:rotate-12 group-hover:scale-110 group-hover:border-[#F59725] transition-transform duration-300 ease-out">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F59725] mb-1 uppercase tracking-wider">
                Verbindlich
              </div>
              <h3 className="font-display font-bold text-base text-white leading-snug">
                Garantierter Festpreis
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mt-0.5">
                Transparente Kalkulation ohne versteckte Nachforderungen
              </p>
            </div>
          </div>

          {/* 3. Alles aus einer Hand */}
          <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59725]/40 hover:bg-white/[0.05] transition-all duration-300 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-[#F59725]/15 text-[#F59725] border border-[#F59725]/30 flex items-center justify-center shrink-0 group-hover:rotate-12 group-hover:scale-110 group-hover:border-[#F59725] transition-transform duration-300 ease-out">
              <UserCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F59725] mb-1 uppercase tracking-wider">
                Persönlich
              </div>
              <h3 className="font-display font-bold text-base text-white leading-snug">
                Alles aus einer Hand
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mt-0.5">
                1 fester Ansprechpartner von Anfang bis Ende
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
