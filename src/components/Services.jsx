import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { R2_BASE } from '../data/content';
import HeroButton from './HeroButton';

export default function Services({ onOpenFunnel }) {
  const showcases = [
    {
      title: 'Komplettbäder aus einer Hand',
      cta: 'Komplettbad anfragen',
      tagline: 'Ein verlässlicher Ansprechpartner. Null Koordinations-Stress.',
      description:
        'Vom ersten staubarmen Abbruch bis zur letzten perfekten Silikonfuge: Kingsley Hoffmann koordiniert alle Sanitär-, Elektro- und Fliesenarbeiten persönlich. Sie lehnen sich entspannt zurück und freuen sich auf den schlüsselfertigen Einzug.',
      highlights: [
        'Feste Terminzusage & verbindlicher Festpreis',
        'Staubschutz-Systeme für saubere Wohnräume',
        'Zertifizierte Verbundabdichtung nach DIN 18534',
      ],
      image: `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`,
    },
    {
      title: 'XXL-Großformatige Platten',
      cta: 'Großformat anfragen',
      tagline: 'Fugenlose Raumästhetik mit fugenarmen, ruhigen Flächen.',
      description:
        'Großformate bis zu 2,80 Meter Höhe lassen Räume atmen und wirken unvergleichlich elegant. Dank moderner Vakuum-Hebetechnik und Buttering-Floating-Verfahren verlegen wir großformatige Platten vollkommen hohlraumfrei und millimetergenau auf Gehrung.',
      highlights: [
        'Minimaler Fugenanteil – extrem pflegeleicht',
        'Präzise 45°-Jollykanten ohne billige Plastikschienen',
        'Optische Raumvergrößerung auch für kleine Bäder',
      ],
      image: `${R2_BASE}/Fliesenleger-Hoffmann_11.webp`,
    },
    {
      title: 'Bodengleiche Walk-In Duschen',
      cta: 'Walk-In Dusche anfragen',
      tagline: 'Schwellenloser Komfort für Generationen. Absolut dicht.',
      description:
        'Bodengleiche Duschen verbinden barrierefreie Bewegungsfreiheit mit moderner Wellness-Architektur. Mit exaktem Gefälleestrich und eleganter Edelstahl-Duschrinne fließt das Wasser zuverlässig ab – garantiert feuchtigkeitsdicht.',
      highlights: [
        'Ebenerdiger Einstieg ohne störende Stolperkanten',
        'Hochwertige Edelstahlablaufrinnen & Wandabläufe',
        'Schimmelresistente Silikon- und Epoxidharzfugen',
      ],
      image: `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`,
    },
  ];

  return (
    <section id="leistungen" className="py-24 sm:py-36 bg-white relative overflow-hidden">
      {/* Background ambient lighting & gradients in orange/blue from hero */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[550px] h-[550px] bg-[#09182B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, spacious headline without numbers */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <p className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F59725] mb-3">
            HANDWERK MIT ANSPRUCH
          </p>
          <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            PRÄZISION IN JEDEM <br />
            <span className="text-[#C66030]">EINZELNEN MILLIMETER.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed max-w-2xl font-normal">
            Keine Massenabfertigung, keine halben Sachen. Wir konzentrieren uns auf das, was wir perfekt beherrschen.
          </p>
        </div>

        {/* Big Editorial Showcases - Large Images, Clean Text, Zero Clutter */}
        <div className="space-y-24 sm:space-y-36">
          {showcases.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Large Image Column (7 Cols) with Organic Hero Shape Accent */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    {/* Organic Amber SVG Shape Backdrop from Hero */}
                    <div 
                      className={`absolute -inset-3 bg-gradient-to-tr from-[#F59725]/30 to-[#E46B2D]/20 rounded-3xl transform ${
                        isReversed ? 'rotate-1' : '-rotate-1'
                      } group-hover:rotate-0 transition-transform duration-500 pointer-events-none`} 
                    />

                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-xl border-2 border-neutral-200/80 group-hover:border-[#F59725] transition-all duration-500">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Clean Editorial Text Column (5 Cols) */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <h3 className="font-display font-black uppercase text-2xl sm:text-4xl text-[#09182B] tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#F59725]">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* 3 Clean Key Points */}
                  <ul className="space-y-3 pt-1">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#F59725]/15 text-[#C66030] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Clean CTA Button matching Hero Style */}
                  <div className="pt-3">
                    <HeroButton
                      onClick={onOpenFunnel}
                      variant="dark"
                      size="sm"
                      icon={ArrowRight}
                    >
                      {item.cta}
                    </HeroButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
