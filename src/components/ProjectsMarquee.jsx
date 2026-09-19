import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { R2_BASE } from '../data/content';
import HeroButton from './HeroButton';

export default function ProjectsMarquee() {
  // Row 1 photos (11 real high-res project images)
  const row1 = [
    `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_03.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_11.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_05.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_17.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_19.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_12.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_04.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_02.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_08.webp`,
  ];

  // Row 2 photos (11 real high-res project images)
  const row2 = [
    `${R2_BASE}/Fliesenleger-Hoffmann_10.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_14.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_18.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_20.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_21.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_22.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_24.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_07.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_15.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_13.webp`,
    `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] overflow-hidden relative border-b border-neutral-200/80">
      
      {/* Section Header - Clean, No Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
          ECHTE PROJEKTE. <br />
          <span className="text-[#C66030]">ECHTE HANDWERKSKUNST.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal pt-3">
          Alle Aufnahmen stammen zu 100 % von unseren realen Baustellen in Liebenau, Marklohe und der Region Nienburg.
        </p>
      </div>

      {/* Double Infinite Marquee Container - Both scrolling to the RIGHT */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* ROW 1: Scrolling Right */}
        <div className="relative w-full overflow-hidden flex">
          {/* Gradient edge fades */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <div 
            className="animate-marquee-right flex gap-4 sm:gap-6 shrink-0"
            style={{ animationDuration: '44s' }}
          >
            {[...row1, ...row1].map((src, i) => (
              <div
                key={`r1-${i}`}
                className="relative w-[300px] sm:w-[420px] aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 shadow-md border-2 border-neutral-200/80 hover:border-[#F59725] transition-all duration-300 shrink-0 group cursor-pointer"
              >
                <img
                  src={src}
                  alt="Fliesenleger Hoffmann Projekt"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="relative w-full overflow-hidden flex">
          {/* Gradient edge fades */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <div 
            className="animate-marquee-right flex gap-4 sm:gap-6 shrink-0"
            style={{ animationDuration: '38s' }}
          >
            {[...row2, ...row2].map((src, i) => (
              <div
                key={`r2-${i}`}
                className="relative w-[300px] sm:w-[420px] aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 shadow-md border-2 border-neutral-200/80 hover:border-[#F59725] transition-all duration-300 shrink-0 group cursor-pointer"
              >
                <img
                  src={src}
                  alt="Fliesenleger Hoffmann Projekt"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Button to dedicated Projects Page */}
      <div className="mt-12 sm:mt-16 text-center">
        <HeroButton
          to="/projekte"
          variant="dark"
          icon={ArrowRight}
        >
          Alle Projekte ansehen
        </HeroButton>
      </div>

    </section>
  );
}
