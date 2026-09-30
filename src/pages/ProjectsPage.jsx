import React, { useState, useMemo } from 'react';
import { Eye, X, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/content';
import HeroButton from '../components/HeroButton';

export default function ProjectsPage({ onOpenFunnel }) {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const ITEMS_PER_PAGE = 6;
  const categories = ['Alle', 'Komplettbäder', 'Großformat', 'Walk-In Duschen', 'Wohnbereich', 'Außenbereich'];

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Alle') return GALLERY_PROJECTS;
    return GALLERY_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  // Current page items
  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const gridElement = document.getElementById('projekte-grid');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="pt-24 sm:pt-36 pb-20 sm:pb-32 bg-[#FAF9F6]">
      {/* Top Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="font-display font-black uppercase italic text-3xl sm:text-5xl lg:text-6xl text-[#09182B] tracking-tight leading-[1.05]">
            UNSERE REALISIERTEN <br />
            <span className="text-[#C66030]">TRAUMBÄDER & PROJEKTE.</span>
          </h1>

          <p className="text-sm sm:text-lg text-neutral-600 leading-relaxed font-normal pt-1 sm:pt-2 max-w-2xl mx-auto">
            100 % echte Baustellenaufnahmen aus Liebenau, Marklohe, Steyerberg und dem Landkreis Nienburg. Keine Katalogfotos, sondern gelebte Handwerkskunst.
          </p>
        </div>

        {/* Filter Pills: Horizontally swipeable on mobile, centered wrap on desktop */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 px-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mt-6 sm:mt-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
                activeFilter === cat
                  ? 'bg-[#09182B] text-white shadow-md border-2 border-[#F59725]'
                  : 'bg-white text-neutral-700 hover:text-[#09182B] hover:border-[#F59725]/50 border border-neutral-200/80 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Anchor for Scroll */}
      <div id="projekte-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-bold text-neutral-500 mb-6 pb-4 border-b border-neutral-200/80">
          <span>
            Zeige {currentProjects.length} von {filteredProjects.length} Projekten ({activeFilter})
          </span>
          <span>Seite {currentPage} von {totalPages}</span>
        </div>

        {/* Projects Grid - Exactly 6 per page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {currentProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="group relative rounded-2xl overflow-hidden bg-white border-2 border-neutral-200/80 hover:border-[#F59725] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(245,151,37,0.18)] cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
            >
              {/* Photo Stage with Zoom & Hover Indicator */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09182B]/90 via-[#09182B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-lg bg-[#F59725] text-[#09182B] font-display font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    <span>Großansicht öffnen</span>
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase text-[#09182B] tracking-wider border border-neutral-200 shadow-xs">
                  {project.category}
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#09182B] group-hover:text-[#C66030] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#C66030]">
                  <span>Details ansehen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Navigation (Max 6 per page, next page controls) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-16 pt-8 border-t border-neutral-200/80">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                currentPage === 1
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
                  : 'bg-white text-[#09182B] hover:bg-[#F59725] hover:text-white border border-neutral-300 shadow-xs cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Vorherige</span>
            </button>

            {/* Numbered Page Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 rounded-lg text-xs sm:text-sm font-display font-black transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-[#09182B] text-white shadow-md border-2 border-[#F59725]'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                currentPage === totalPages
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
                  : 'bg-white text-[#09182B] hover:bg-[#F59725] hover:text-white border border-neutral-300 shadow-xs cursor-pointer'
              }`}
            >
              <span>Nächste</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Call to Action Banner */}
        <div className="mt-16 sm:mt-24 bg-[#09182B] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border-2 border-[#F59725]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="relative z-10 max-w-xl space-y-2">
            <h3 className="font-display font-black uppercase italic text-2xl sm:text-3xl text-white">
              PLANEN SIE EIN ÄHNLICHES PROJEKT?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal">
              Kingsley Hoffmann berät Sie persönlich vor Ort in Liebenau, Marklohe oder der Region Nienburg – transparent und mit Festpreis-Garantie.
            </p>
          </div>

          <HeroButton
            onClick={onOpenFunnel}
            icon={ArrowRight}
            size="md"
            className="w-full sm:w-auto"
          >
            Vor-Ort-Termin vereinbaren
          </HeroButton>
        </div>

      </div>

      {/* Lightbox Modal for High-Res Detail View (Mobile Optimized) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#09182B] text-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F59725]/40 overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with generous touch target */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#F59725] text-white hover:text-[#09182B] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Res Photo Stage */}
            <div className="relative aspect-[16/10] max-h-[48vh] sm:max-h-[60vh] bg-neutral-950 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-4 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10 overflow-y-auto">
              <div className="space-y-1">
                <div className="text-xs text-[#F59725] font-bold uppercase tracking-wider">
                  <span>{selectedProject.category}</span>
                </div>
                <h4 className="font-display font-black text-lg sm:text-xl text-white leading-snug">
                  {selectedProject.title}
                </h4>
                <p className="text-xs text-neutral-300">
                  {selectedProject.scope}
                </p>
              </div>

              <HeroButton
                onClick={() => {
                  setSelectedProject(null);
                  onOpenFunnel();
                }}
                size="sm"
                className="w-full sm:w-auto shrink-0"
              >
                Dieses Design anfragen
              </HeroButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
