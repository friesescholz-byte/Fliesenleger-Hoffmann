import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProjectsMarquee from '../components/ProjectsMarquee';
import Services from '../components/Services';
import ProblemSolution from '../components/ProblemSolution';
import Statement from '../components/Statement';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';

export default function HomePage({ onOpenFunnel }) {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenFunnel={onOpenFunnel} />

      {/* 2. Trust Bar: Qualität aus einer Hand */}
      <TrustBar />

      {/* 3. Double Auto-Scrolling Marquee Slider */}
      <ProjectsMarquee />

      {/* 4. Editorial Craft Showcases */}
      <Services onOpenFunnel={onOpenFunnel} />

      {/* 5. Clean Problem & Solution Comparison */}
      <ProblemSolution onOpenFunnel={onOpenFunnel} />

      {/* 6. Über uns: Kingsley Hoffmann Portrait & Statement with link to /ueber-uns */}
      <Statement onOpenFunnel={onOpenFunnel} />

      {/* 7. Customer Testimonials */}
      <Reviews />

      {/* 8. FAQ Accordion */}
      <FAQ onOpenFunnel={onOpenFunnel} />
    </>
  );
}
