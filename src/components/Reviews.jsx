import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS, R2_BASE } from '../data/content';

export default function Reviews() {
  const reviewPhotos = [
    `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`, // Master-Bad
    `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`, // Walk-In Dach
    `${R2_BASE}/Fliesenleger-Hoffmann_03.webp`, // Modernes Gäste-WC
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FAF9F6] relative overflow-hidden border-b border-neutral-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09182B] text-white text-xs font-black uppercase tracking-widest mb-3">
            <div className="flex text-[#F59725]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5.0 VON 5 STERNEN IN DER REGION</span>
          </div>

          <h2 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            WAS BAUHERREN ÜBER <br />
            <span className="text-[#C66030]">UNSERE ARBEIT SAGEN.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Echte Erfahrungen von Eigenheimbesitzern aus Liebenau, Marklohe und dem gesamten Landkreis Nienburg.
          </p>
        </div>

        {/* 3 Clean Testimonials - Large Photos, Clean Typography, Zero Tag-Clutter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => {
            const photo = reviewPhotos[idx];

            return (
              <div
                key={idx}
                className="group flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Clean Real Project Photo Preview - No messy sticker badges */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-6 border-2 border-neutral-200/80 group-hover:border-[#F59725] transition-all duration-500 shadow-md bg-neutral-900">
                    <img
                      src={photo}
                      alt={`Projekt für ${t.name}`}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 text-[#F59725] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-[#09182B] ml-1.5">5.0</span>
                  </div>

                  {/* Authentic Quote */}
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal italic">
                    „{t.text}“
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-[#09182B] group-hover:text-[#C66030] transition-colors">
                      {t.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F59725]" />
                      <span>{t.location}</span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-400 group-hover:bg-[#F59725] group-hover:text-white transition-colors duration-200 border border-neutral-200">
                    <Quote className="w-3.5 h-3.5" />
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
