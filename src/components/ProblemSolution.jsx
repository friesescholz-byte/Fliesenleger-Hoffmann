import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { R2_BASE } from '../data/content';
import HeroButton from './HeroButton';

export default function ProblemSolution({ onOpenFunnel }) {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F59725] mb-3">
            VERANTWORTUNG AUS EINER HAND
          </p>
          <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            EIN ANSPRECHPARTNER. <br />
            <span className="text-[#C66030]">NULL GEWERKE-CHAOS.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Wer ein Bad saniert, will kein Baustellen-Chaos mit 4 verschiedenen Firmen, die sich gegenseitig die Schuld zuschieben. Bei uns haben Sie einen festen persönlichen Ansprechpartner.
          </p>
        </div>

        {/* Clean 2-Side Comparison - High Contrast, No Clutter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Was Sie vermeiden (4 Cols) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-red-600">
                Typischer Sanierungs-Ärger
              </span>
              <h3 className="font-display font-black uppercase text-xl sm:text-2xl text-[#09182B] mt-2 mb-6">
                Herkömmliche Badsanierung
              </h3>

              <ul className="space-y-5">
                {[
                  'Sie müssen Fliesenleger, Klempner & Elektriker selbst koordinieren',
                  'Verzögerungen und Ausreden zwischen den Gewerken',
                  'Staub und Schmutz im gesamten Wohnbereich',
                  'Unerwartete Nachforderungen treiben den Endpreis hoch',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-neutral-600">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-100 text-xs text-neutral-400">
              Der Bauherr trägt das gesamte Risiko
            </div>
          </div>

          {/* Right: Das Hoffmann Prinzip (7 Cols) */}
          <div className="lg:col-span-7 bg-[#09182B] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#F59725]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient amber glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#F59725]">
                Die stressfreie Lösung
              </span>
              <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-white mt-2 mb-6">
                Das Kingsley Hoffmann Versprechen
              </h3>

              <ul className="space-y-5 mb-8">
                {[
                  '1 fester Ansprechpartner von Abbruch bis zur letzten Fuge',
                  'Komplette Koordination aller beteiligten Sanitär- & Elektropartner',
                  'Zertifizierter Nässeschutz nach DIN 18534 mit Systemgarantie',
                  'Schutz Ihrer Wohnräume durch reißfestes Vlies & Staubschutztüren',
                  'Verbindlicher Festpreis – transparent vorab kalkuliert',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#F59725] text-[#09182B] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-300">
                Kostenlose Erstberatung vor Ort in der Region
              </span>
              <HeroButton
                onClick={onOpenFunnel}
                size="sm"
                className="w-full sm:w-auto"
                icon={ArrowRight}
              >
                Jetzt anfragen
              </HeroButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
