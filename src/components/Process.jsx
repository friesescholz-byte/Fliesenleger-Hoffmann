import React from 'react';
import { ArrowRight, PhoneCall, Ruler, Sparkles, Check } from 'lucide-react';
import { R2_BASE } from '../data/content';

export default function Process({ onOpenFunnel }) {
  const steps = [
    {
      title: 'Vor-Ort-Beratung & Aufmaß',
      description:
        'Kingsley Hoffmann kommt persönlich zu Ihnen nach Hause nach Liebenau oder in die Region, prüft die baulichen Gegebenheiten und bespricht Ihre Raumwünsche.',
      photo: `${R2_BASE}/Fliesenleger-Hoffmann_01.webp`,
    },
    {
      title: 'Verbindlicher Festpreis',
      description:
        'Sie erhalten ein transparentes, detailliertes Angebot ohne versteckte Kosten. Termine und Preise stehen vor Baubeginn verbindlich fest.',
      photo: `${R2_BASE}/Fliesenleger-Hoffmann_12.webp`,
    },
    {
      title: 'Saubere Fachumsetzung',
      description:
        'Mit professionellem Staubschutz und zertifizierter DIN 18534 Abdichtung realisieren wir Ihr neues Bad pünktlich, sauber und schlüsselfertig.',
      photo: `${R2_BASE}/Fliesenleger-Hoffmann_17.webp`,
    },
  ];

  return (
    <section id="ablauf" className="py-24 sm:py-36 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Spacious Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <p className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F59725] mb-3">
            PLANBAR & STRESSFREI
          </p>
          <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            VOM ERSTEN BESUCH <br />
            <span className="text-[#C66030]">ZUM FERTIGEN TRAUMBAD.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Keine bösen Überraschungen, keine endlosen Verzögerungen. Kingsley Hoffmann begleitet Ihr Vorhaben von der ersten Idee bis zur letzten Silikonfuge.
          </p>
        </div>

        {/* 3 Clean Horizontal Columns - Large Photos, Clean Text, Zero Kachel-Clutter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col space-y-6 group"
            >
              {/* Large Real Craftsmanship Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-900 border-2 border-neutral-200/80 group-hover:border-[#F59725] transition-all duration-500 shadow-md group-hover:shadow-xl">
                <img
                  src={step.photo}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Clean Headline & Concise Text */}
              <div className="space-y-2.5">
                <h3 className="font-display font-black uppercase text-xl sm:text-2xl text-[#09182B] group-hover:text-[#C66030] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Subtle Amber Accent Divider */}
              <div className="h-1 w-10 bg-[#F59725]/40 group-hover:w-20 group-hover:bg-[#F59725] rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Action Button matching Hero Style */}
        <div className="mt-20 text-center">
          <button
            onClick={onOpenFunnel}
            className="bg-[#C66030] hover:bg-[#E46B2D] text-white font-display font-black uppercase text-sm px-8 py-4 rounded-lg tracking-wider transition-all duration-200 inline-flex items-center gap-2.5 shadow-md hover:shadow-[0_8px_25px_rgba(228,107,45,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Jetzt unverbindliches Erstgespräch anfordern</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
