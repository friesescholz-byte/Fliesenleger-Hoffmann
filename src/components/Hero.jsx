import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenFunnel }) {
  // Torn paper banner path from Canva
  const TORN_BANNER_PATH =
    'M186.9 139.8c-.1-39.5-1.3-92.9-1.3-132.3 0-.6.1-1.2.1-1.7-.1-.1-.2-.1-.3-.2 0 0-.1.1-.1.2-.2.5-.6.5-1 .5-.5-.1-1-.6-1.6-.4-.2.1-.6-.1-.7-.3-.3-.4-.7-.4-1.1-.2-.2.1-.4 0-.6 0-.3 0-.7-.1-1-.2-.1 0-.3-.1-.4-.1-.3-.1-.6-.4-.9 0 0 0-.2 0-.3-.1-.1-.2-.2-.5-.3-.7-.2-.3-.2-.8-.5-1-.2-.1-.3-.2-.4-.4 0-.1-.2-.2-.2-.3l-.3-.3c-.1-.2-.2-.5-.4-.6-.4-.3-.5-.7-.3-1.2-.3-.1-.5-.3-.8-.3-1.2.1-2.5.3-3.7.4-.2 0-.5.1-.6.2-.8.5-1.6.1-2.4 0-.6 0-1.2-.3-1.8-.4-.7-.1-1.3 0-2-.1-.1 0-.2-.1-.3-.2-.2-.3-.6-.2-.8-.1-.3.2-.4.5-.6.8-.5.1-1.2.2-1.7.5-.4.2-.6.3-.9.1l-.1.1c.2.2.3.5.5.7-.3.1-.7.3-.9.2-.5-.1-.7.1-1.1.3-.4.3-.9.5-1.3.7-.1 0-.2 0-.3-.1-.1 0-.2-.1-.2-.1-.5.2-1 .4-1.5.2-.1 0-.1.1-.2.1-.6.2-1 .9-1.8.9-.6 0-1.2.5-1.8.5-.7.1-1.3.3-1.9.6-.2.1-.4.1-.5.1-.5-.2-.8.1-1 .4-.5.7-1.3.9-2 1.1-.9.2-1.8.3-2.7.4-.1 0-.2.3-.4.4-.1 0-.2-.1-.2-.1-.5.6-.8 1.5-1.8 1.4h-.1c-.8.5-1.6.3-2.3.1-.2 0-.5-.2-.6-.4-.3-.6-1.1-.8-1.7-.6-.5.2-1 .3-1.5.5-.8.2-1.5.3-2.3-.1s-1.4-.1-1.8.8c-.3.6-1.1.7-1.6.2-.3-.3-.5-.2-.8 0l-.6.6c-.1.1-.3.1-.4.1h-.6c-.4 0-.8-.1-1.2-.2-.5-.1-.9-.4-1.4-.5-.8-.1-1-.8-1.3-1.3-.2-.3-.6-.7-1-.6-.4.2-.8 0-1.1-.1-.1 0-.3-.1-.4-.1-.7-.2-1.2.2-1.7.7l-.4.4c-.1.1-.1.3-.2.4-.6.5-1.2.3-1.9 0-.6-.3-1.3 0-1.5.6-.1.4-.2.7-.7.9-.5.3-1.1.5-1.2 1.2 0 .1-.1.2-.2.2-.3.1-.5.2-.8.3h-.9c-.6-.1-1.2-.3-1.8-.4-.7-.1-1.3.3-2 .4l-.1.1c-.2.3-.5.2-.7 0-.4-.4-1.1-.5-1.6-.3-.6.3-1.2.5-1.8.7-.2 0-.4-.1-.5-.1-.2 0-.5-.1-.6 0-.8.6-1.6.4-2.3 0-.4-.2-1-.4-1.2-1-.1-.4-.5-.8-.8-1.1-.5-.5-1-1.2-1.9-1.2-.2 0-.4-.4-.5-.3-.4.1-.4-.1-.6-.3s-.5-.4-.7-.7c-.3-.4-.6-.9-.9-1.3s-.5-.9-.8-1.3c-.1-.1-.4-.2-.5-.1l-1.2.6c-.2.1-.3.3-.4.5l-.1-.1c.1-.3.2-.6.3-.7l-1.2-.3c-.3-.1-.8-.1-1-.1h-1.6c-.6 0-1.1-.1-1.7 0-.4.1-.7-.1-1-.3-.8-.6-1.6-1.3-2.7-1-.1 0-.3-.1-.4-.2-.3-.1-.5-.3-.9-.5 0 .3 0 .4.1.6-.2.2-.3.1-.4 0-.1.1-.2.3-.3.3-.5.2-1 .3-1.5.5-.2.1-.4.2-.5.3-.4.3-.7.8-1.4.7-.1 0-.3.2-.5.2-.2.1-.5.1-.7.2h-.2c-.6.2-1.1.4-1.7.5h-.4c-.5 0-.9-.1-1.4-.1s-1 .2-1.5.2c-.6 0-1.3 0-1.8-.4-.1-.1-.4-.1-.6 0-.7.1-1.4.2-2 .4s-.9 0-1.1-.5c-.1-.2-.3-.4-.5-.6-.3-.2-.6-.5-.9-.5-.7 0-1.1-.4-1.6-.7-.8-.5-1.5-1.1-2.5-1v-.5c.2 0 .4 0 .6-.1-.3-.2-.3-.5-.5-.7-.4-.3-.8-.4-1.2-.6-.3-.1-.7-.1-.5.4-.5.1-.9.1-1.1.3-.4.3-.8.1-1.1-.1-.2-.1-.4-.2-.6-.1-1.2.6-2.4.3-3.6.3-.2 0-.4-.1-.7-.1-.4-.1-.7-.3-1.1-.4s-.9-.2-1.3-.3h-.3c-.7 0-1.4.1-2 .1-.5 0-1-.2-1.6-.3-.1-.8-.9-.6-1.4-1-.1-.1-.3 0-.4 0-.6-.1-1 .2-1.2.7-.3.5-1.1.7-.8 1.5.1.1.3.2.4.4 0 .3-.1.5-.4.4-.1 0-.2.2-.3.3s-.1.3-.2.3c-.6.2-1 .7-1.7.6h-.2c-.6.5-1.2.4-1.9.3-.3-.1-.7 0-1.1 0-.3 0-.6 0-.9-.2-.4-.2-.8-.5-1.2-.7s-.9-.2-.9-.9c0-.1-.2-.2-.2-.3-.7.6-1.3 1.1-1.9 1.6-.3.3-.7.7-.5 1.2 0 .1-.1.2-.1.3-.1.2-.2.4-.4.5-.2.3-.4.6-.6 1l-.6.6c-.2.3-.4.6-.7.8-.7.6-1.4 1.2-2.2 1.8-.4.4-.9.7-1.3 1.1-.7.6-1.5 1.1-1.9 2 0 .1-.2.2-.3.3-.5.4-1.3.4-1.3 1.2-.8 0-1.2.6-1.6 1.1-.3.4-.6.9-1 1.2-.4.2-.9.1-1.4.1-.2 0-.4 0-.4.1-.4.4-.9.7-1.2 1.2s-.6.8-1.1.9-1 .6-1.7.3c-.6-.2-1.3 0-1.7-.4-.8.1-1.4.3-2.1.4-.8.2-1.7.1-2.4.7-.6.5-1.1 1-2 .9.1.6.2 1.1.3 1.7.2 1.6.4 3.2.5 4.8.3 2 .4 3.9.2 5.8-.2 2.7-1.1 95.1-2 97.6l-.9 2.1c-.2.5.1.8.6.9.6.1.8.5 1 1 .2.8-.1 1.6.3 2.4.2.4 0 1.1-.1 1.7-.1.8.1 1.6.4 2.3.7 1.2.8 2.6.8 3.9 0 .3.1.6.2.8.2.2.6.4 1 .5l2.4 1.2c1.1.6 2 .5 3-.2.1-.1.4-.2.5-.2.7.1 1.4.1 2 .7.7.6 1.7 1 2.5 1.5.5.3 1.1.7 1.4 1.1.2.2.4.4.6.5 1.1.4 1.7 1.4 2.4 2.2.6.7 1.4 1.1 2.3 1.2 1 .2 2 .3 3 .5.4.1.9.2 1.3.4.5.2 1 .2 1.4.5.6.5 1.2.8 2 .6.3-.1.7.1 1 .2.1 0 .2.1.3.1 1.1.1 2.1-.1 3.1-.3.4-.1.8-.2 1.2-.4 1.1-.5 2.2-1 3.2-1.6.7-.4 1.4-.8 2.2-.4h.4c.7 0 1.4-.1 2-.2.1 0 .3 0 .3-.1.3-.4.8-.4 1.3-.5.8-.1 1.6-.1 2.2-.6.6-.4 1.2-.5 1.9-.6.1 0 .3-.1.4-.1.5-.1 1-.4 1.4-.3.9.2 1.3-.1 1.9-.9.1-.2.4-.3.6-.4.5-.1 1 0 1.5-.1.3 0 .6-.3.8-.3.8.1 1.7-.2 2.4.3.1.1.3.1.5.1 1.3.1 2.4.5 3.3 1.3.3.3.7.5 1 .7s.7.2 1 .3.5.2.8.2c.5 0 .9.2 1.2.6.1.1.2.2.3.4-.1.3.5 1.1.9 1.1.7 0 1.4.2 2 .7.1.1.3.1.5 0 .3-.1.5-.1.7.2.1.1.5.1.7.1.5 0 1.1-.1 1.6 0 .9.1 1.7.2 2.6.4.2 0 .4.1.5.2.2.5.7.5 1 .6s.7.2.9.2c.1-.1.3-.2.5-.4-.4 0-.6.1-.8.1.4-.5.8-.6 1.3-.3.6.5 1.1.5 1.8 0l.6-.3v-.5c.3.1.6.3.8.3.6-.3 1.2-.6 1.7-1 .6-.4 1.1-.9 1.6-1.3.1 0 .1-.1.2-.1.7-.2 1.3-.3 2-.5.4-.1.7-.3 1.1-.4.3-.1.5-.1.8-.2h1c.2 0 .5 0 .7-.1.1-.2.3-.5.4-.5.3 0 .5.2.8.3.1 0 .1.1.1.2.4.4.7.9 1.1 1.3.5.5 1 .5 1.3.2.5-.4.9-.7 1.6-.5.1 0 .3.1.4 0 .5-.2 1.1-.4 1.6-.7.3-.1.7-.1.8-.3.3-.6.8-.9 1.3-1.3.3-.3.6-.7.9-.8.7-.2 1.2-.8 1.8-1.2.5-.3.8-.9 1.3-1 .8-.2 1.4-.7 2.1-1.2.4-.3.9-.5 1.4-.4.3.1.7 0 .9-.1.4-.2.8-.5 1.2-.7.3-.2.6-.4.9-.4 1-.1 1.8-.3 2.3-1.3.2-.4 1.2-.9 1.6-.7.7.3 1.2.1 1.6-.5.3-.3.7-.2 1 0 .2.2.4.3.6.3.7.1 1.5 0 2.2.1.6.1 1.2-.1 1.6-.5s.7-.4 1.3-.2c.5.2.9.7 1.6.6.6-.1 1.3.2 2-.1h.4c.6.2 1.2.3 1.7.8.6.5.7-3.2 1.3-2.8.9.6.7 0 1.6.5.7.3.4-.8 1.2-.6.1 0 1.3.8 1.3.7.5-.3 1-3.3 1.5-3.2 1 .3 1.9.1 2.8-.3.5-.2 1.3-.9 1.7-.6.7.5 1.4.7 2.2.8.1 0 .2.1.3.2.3.4 1.7-.7 2-.3.4.6.8 1.2 1.2 1.7.2.2.5.3.6.5.1.5.3.7.8.7.3 0 .6.1.8.3.5.3.9.6 1.3.9.5.3 1 .6 1.2 1.1.1.2.2.3.3.4.4.4.8.7 1.2 1.1.6.5 1.1 1.1 1.7 1.6.2.1.4.3.6.4.4.2.8.4 1.1.7s1.7-1.5 1.9-1.1c0 .1.1.1.2.1.6.5 1.2.3 1.8.1.2-.1.4-.2.5-.1.7.3 1.2 1 2.1 1.1 0 0 .1 0 .1.1.2.6.8.6 1.3.7.3 0 .6.1.8.2.6.3 1.2.7 1.9.9.9.3 1.8.5 2.5 1 .1 0 .2 0 .2.1.3.2.8.3 1 .6.3.6 1.1.5 1.5 1h.1c.4 0 .8.1 1.3.1.2-.1.5-.3.7-.3.9.3 1.8.3 2.4-.5.1-.1.3-.1.5-.1h.8c.9-.2 1.7-.4 2.6-.5.4-.1.9.1 1.3.2s.8.1 1.2.1c.5 0 .9-.2 1.4-.2.4-.1.9-.1 1.3-.2.9-.2 1.7-.4 2.6-.5.6-3.4.5-7.4.5-11.5z';

  // Top-Left Solid Amber Wavy Corner
  const LEFT_CORNER_PATH =
    'M 0 0 L 520 0 C 460 70, 400 160, 330 220 C 260 280, 230 340, 170 380 C 110 420, 60 400, 0 420 L 0 0 Z';

  // Top-Right Solid Amber Wavy Corner
  const RIGHT_CORNER_PATH =
    'M 920 0 L 1440 0 L 1440 320 C 1400 310, 1350 300, 1290 280 C 1220 260, 1170 240, 1100 200 C 1030 150, 980 70, 920 0 Z';

  return (
    <section className="relative w-full overflow-hidden select-none pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-14">
      
      {/* 1. FIXED BACKGROUND IMAGE LAYER ("hintergrundbild feststehend") */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fixed background image with parallax depth */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg-tiles.webp')" }}
        />

        {/* Deep Midnight Navy Blue Tint - Seamlessly fades into TrustBar at bottom */}
        <div className="absolute inset-0 bg-[#071320]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09182A]/70 via-[#0C223C]/60 to-[#09182B]" />
      </div>

      {/* 2. TOP CORNER OVERLAYS: Solid Amber-Yellow (#F59725) framing the top-left and top-right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 768" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path d={LEFT_CORNER_PATH} fill="#F59725" />
          <path d={RIGHT_CORNER_PATH} fill="#F59725" />
        </svg>
      </div>

      {/* Canvas Container */}
      <div className="relative w-full max-w-[1440px] mx-auto flex items-center justify-center">

        {/* HERO CONTENT STAGE */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
          
          {/* LEFT: CANVA SUNBURST RAY EFFECT + CUT-OUT VAN WITH SYNCHRONIZED ROTATING ENTRANCE */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ scale: 0.25, rotate: -35, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 75,
                damping: 14,
                delay: 0.15,
              }}
              className="relative w-[320px] sm:w-[480px] lg:w-[600px] xl:w-[660px] aspect-[4/3] flex items-center justify-center"
            >
              {/* THE CANVA RAY/SUNBURST EFFECT (Static after entrance, subtle & discreet) */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 transform -rotate-12"
              >
                <img
                  src="/hero-rays.svg"
                  alt="Sunburst rays effect"
                  className="w-full h-full object-contain filter invert-[90%] sepia-[10%] brightness-[85%] contrast-[90%]"
                />
              </div>

              {/* THE CUT-OUT FORD TRANSIT VAN (Stationary with responsive interactive hover) */}
              <div className="relative z-10 w-[88%] sm:w-[92%] transform -rotate-1 hover:scale-103 hover:-rotate-2 transition-transform duration-300 drop-shadow-2xl cursor-pointer">
                <img
                  src="/hero-van-tight.webp"
                  alt="Kingsley Hoffmann - Ihr Fliesenleger Einsatzfahrzeug"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: TEXT HIERARCHY & CANVA BUTTONS WITH ENTRANCE ANIMATIONS */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            
            {/* TORN PARCHMENT BANNER (Stamping down from above) */}
            <motion.div
              initial={{ y: -80, opacity: 0, scale: 0.82, rotate: -4 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 130, damping: 13, delay: 0.32 }}
              className="relative w-full max-w-[460px] sm:max-w-[580px] lg:max-w-[640px]"
            >
              {/* SVG Torn Paper Background */}
              <svg 
                viewBox="0 0 187.0 158.4" 
                preserveAspectRatio="none" 
                className="w-full h-[125px] sm:h-[155px] lg:h-[175px] fill-[#FAF6EC] filter drop-shadow-xl"
              >
                <path d={TORN_BANNER_PATH} />
              </svg>

              {/* Text Layer over Parchment */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-2 text-[#0F1922]">
                <span className="font-display font-black uppercase text-xs sm:text-base lg:text-lg tracking-widest leading-tight">
                  KEINE HALBEN SACHEN
                </span>
                <span className="font-display font-black italic uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none mt-1 sm:mt-2 text-[#0F1922]">
                  TRAUMBAD
                </span>
              </div>
            </motion.div>

            {/* SUB-HEADLINE & MAIN DISPLAY TITLE (Slide up with punchy comic weight) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1 sm:space-y-2 pt-1 sm:pt-2"
            >
              <p className="font-display font-extrabold uppercase text-sm sm:text-lg lg:text-xl text-[#E7E4D5] tracking-[0.2em]">
                OHNE GEWERKE-CHAOS
              </p>

              <h2 className="font-display font-black italic uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#E7E4D5] tracking-tight leading-[0.95] drop-shadow-md">
                KOMPLETT<br />
                <span className="text-[#FAF6EC]">SANIERUNG</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto pt-2 font-medium">
                Alles aus einer Hand. Von Entkernung bis zur XXL-Fliese in Liebenau & Region Nienburg.
              </p>
            </motion.div>

            {/* THE TWO CANVA-STYLE POLYGON CUTOUT BUTTONS (Popping in with spring) */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 14, delay: 0.6 }}
              className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
            >
              {/* BUTTON 1: "JETZT ANFRAGEN" */}
              <button
                onClick={onOpenFunnel}
                className="relative group cursor-pointer w-full sm:w-auto transform hover:-translate-y-1.5 hover:scale-104 active:scale-97 transition-all duration-300"
              >
                <div className="relative">
                  {/* Angled Polygon Background SVG with sharp border & clean contour glow */}
                  <svg 
                    viewBox="0 0 446.3 499.9" 
                    className="h-14 sm:h-16 w-full sm:w-56 fill-[#C66030] group-hover:fill-[#E46B2D] stroke-white/85 group-hover:stroke-white transition-all duration-300 filter drop-shadow-md group-hover:drop-shadow-[0_4px_16px_rgba(228,107,45,0.7)]"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M392.9 472.6L0 499.9 0 249.9 62.5 0 388.9 0 446.3 108.4z" 
                      strokeWidth="14"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Special Sheen: 100% strictly clipped to the exact polygon vertices */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: 'polygon(14% 0%, 87.1% 0%, 100% 21.7%, 88% 94.5%, 0% 100%, 0% 50%)' }}
                  >
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-25 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-700 ease-out" />
                  </div>
                  
                  {/* Text inside Button */}
                  <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold uppercase text-base sm:text-lg text-[#FAF6EC] group-hover:text-white tracking-wider underline underline-offset-4 decoration-2 group-hover:decoration-white transition-all duration-200 pointer-events-none">
                    JETZT ANFRAGEN
                  </span>
                </div>
              </button>

              {/* BUTTON 2: "LEISTUNGEN" */}
              <a
                href="#leistungen"
                className="relative group cursor-pointer w-full sm:w-auto transform hover:-translate-y-1.5 hover:scale-103 active:scale-97 transition-all duration-300 block"
              >
                <div className="relative">
                  {/* Inverted Angled Polygon Background SVG with matching border */}
                  <svg 
                    viewBox="0 0 495.7 500.0" 
                    className="h-14 sm:h-16 w-full sm:w-56 fill-[#A94C20]/90 group-hover:fill-[#C66030] stroke-white/60 group-hover:stroke-white transition-all duration-300 filter drop-shadow-md group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] transform rotate-180"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0 0L0 500 430 473.1 495.7 305.8 480.9 64.4z" 
                      strokeWidth="14"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Text inside Button */}
                  <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold uppercase text-base sm:text-lg text-[#FAF6EC] group-hover:text-white tracking-wider transition-colors duration-200 pointer-events-none">
                    LEISTUNGEN
                  </span>
                </div>
              </a>
            </motion.div>

          </div>

        </div>


      </div>

    </section>
  );
}
