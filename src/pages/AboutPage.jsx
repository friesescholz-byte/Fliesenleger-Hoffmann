import React from 'react';
import { ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';
import { COMPANY, IMAGES } from '../data/content';
import HeroButton from '../components/HeroButton';

export default function AboutPage({ onOpenFunnel }) {
  const principles = [
    {
      title: 'Chefsache vor Ort',
      description:
        'Bei uns werden Sie nicht an wechselnde Subunternehmer weitergereicht. Kingsley Hoffmann berät Sie persönlich und steht selbst auf Ihrer Baustelle.',
    },
    {
      title: 'Garantierter Festpreis',
      description:
        'Transparente Kalkulation ohne böse Überraschungen. Was vor Beginn im Angebot vereinbart wurde, gilt verbindlich bis zum Projektabschluss.',
    },
    {
      title: 'Sauberkeit & Staubschutz',
      description:
        'Ihre Wohnräume sind uns heilig. Mit dichten Staubschutztüren und reißfestem Vlies schützen wir Treppen und Flure vor Feinstaub und Schmutz.',
    },
    {
      title: 'Geprüfte Markentechnik',
      description:
        'Keine Billigmischungen aus dem Baumarkt: Wir verarbeiten zertifizierte Dichtsysteme und Fliesenkleber nach strengen DIN 18534 Normen.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32 bg-[#FAF9F6]">
      
      {/* Top Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            ECHTE LEIDENSCHAFT FÜR <br />
            <span className="text-[#C66030]">PERFEKTE FLIESENARBEIT.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-2 max-w-2xl mx-auto">
            Lernen Sie den Menschen hinter den Projekten kennen: Kingsley Hoffmann – Ihr verlässlicher Handwerkspartner in Liebenau, Marklohe und der gesamten Region Nienburg.
          </p>
        </div>
      </div>

      {/* Main Story & Kingsley Portrait */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Photo Column (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900 border-2 border-neutral-200/80 shadow-2xl group">
              <img
                src={IMAGES.owner}
                alt="Kingsley Hoffmann vor dem Firmenfahrzeug"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              
              {/* Clean bottom badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#09182B]/90 backdrop-blur-md rounded-xl p-4 border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-black text-base text-white">
                      Kingsley Hoffmann
                    </h3>
                    <p className="text-xs text-[#F59725] font-semibold">
                      Inhaber & Fachbetrieb
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-[#F59725]" />
                    <span>Liebenau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Biography Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#F59725]">
                Aus Überzeugung & Berufung
              </span>
              <h2 className="font-display font-black uppercase text-2xl sm:text-4xl text-[#09182B] tracking-tight leading-tight">
                „EIN BAD SANIERT MAN NICHT ALLE FÜNF JAHRE. ES MUSS EINFACH SITZEN.“
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                Fliesenlegen ist für mich kein anonymer Job von der Stange, sondern handwerkliche Präzisionsarbeit, an der Sie sich jeden Tag aufs Neue erfreuen sollen. Wer schlampig abdichtet oder krumme Fugen hinterlässt, ruiniert eine Investition für Jahrzehnte.
              </p>
              <p>
                Deshalb habe ich mich ganz bewusst auf schlüsselfertige Komplettbäder und anspruchsvolle Großformate spezialisiert: Ein fester Ansprechpartner, klare Absprachen und keine wechselnden Baustellenkolonnen, die sich gegenseitig die Verantwortung zuschieben.
              </p>
              <p>
                Mit Sitz in Liebenau bin ich fest in der Region verwurzelt. Ob Marklohe, Nienburg, Steyerberg oder Stolzenau: Ich begleite jedes Projekt persönlich – von der ersten Ideenskizze bis zur finalen Abnahme.
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <HeroButton
                onClick={onOpenFunnel}
                variant="dark"
                size="sm"
                className="w-full sm:w-auto"
                icon={ArrowRight}
              >
                Erstgespräch anfordern
              </HeroButton>

              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-300 hover:border-[#09182B] text-[#09182B] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#F59725]" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* 4 Core Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F59725] mb-2">
            UNSERE WERTE
          </p>
          <h2 className="font-display font-black uppercase text-2xl sm:text-4xl text-[#09182B]">
            WORAUF SIE SICH VERLASSEN KÖNNEN.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-[#F59725] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F59725]/15 text-[#C66030] flex items-center justify-center mb-4 font-bold">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#09182B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#09182B] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-14 border-2 border-[#F59725]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="relative z-10 max-w-xl space-y-2 sm:space-y-3">
            <h3 className="font-display font-black uppercase italic text-2xl sm:text-3xl text-white">
              LERNEN WIR UNS KENNEN.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal">
              Erzählen Sie Kingsley Hoffmann von Ihren Badplänen. Wir vereinbaren einen zeitnahen Vor-Ort-Termin direkt bei Ihnen in der Region.
            </p>
          </div>

          <HeroButton
            onClick={onOpenFunnel}
            size="md"
            className="w-full sm:w-auto shrink-0"
            icon={ArrowRight}
          >
            Jetzt anfragen
          </HeroButton>
        </div>
      </div>

    </div>
  );
}
