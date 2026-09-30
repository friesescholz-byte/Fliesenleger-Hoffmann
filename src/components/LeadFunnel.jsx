import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Bath, 
  Maximize2, 
  ShowerHead, 
  Home, 
  Send,
  Phone,
  Calendar,
  X,
  ShieldCheck
} from 'lucide-react';
import { COMPANY } from '../data/content';
import HeroButton from './HeroButton';

export default function LeadFunnel({ isModal = false, onClose = null }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [projectType, setProjectType] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
  });

  const projectOptions = [
    { id: 'komplettbad', label: 'Komplettbad-Sanierung (aus einer Hand)', icon: Bath, badge: 'Beliebteste Wahl' },
    { id: 'grossformat', label: 'XXL-Großformatfliesen / Raumhohe Platten', icon: Maximize2, badge: 'Fugenarm' },
    { id: 'walkin', label: 'Bodengleiche Walk-In Dusche', icon: ShowerHead, badge: 'Barrierefrei' },
    { id: 'wohnbereich', label: 'Wohnräume, Flur oder Terrasse', icon: Home, badge: 'Fliesen & Keramik' },
  ];

  const sizeOptions = [
    { id: 'small', label: 'Gäste-WC / Kleines Bad (unter 8 m²)', sub: 'Kompakte Modernisierung' },
    { id: 'medium', label: 'Standardbad (8 bis 15 m²)', sub: 'Typisches Einfamilienhaus-Bad' },
    { id: 'large', label: 'Großes Traumbad / Wellness (über 15 m²)', sub: 'Master-Bad mit Freisteher-Wanne' },
    { id: 'open', label: 'Wohnbereich / Terrasse (> 30 m²)', sub: 'Großflächige Verlegung' },
  ];

  const timeOptions = [
    { id: 'asap', label: 'Schnellstmöglich', sub: 'Termin nächste Woche' },
    { id: '1-3', label: 'In den nächsten 1 bis 3 Monaten', sub: 'Planung läuft bereits' },
    { id: '3-6', label: 'In 3 bis 6 Monaten', sub: 'Ausführung im Jahresverlauf' },
    { id: 'check', label: 'Reine Vorab-Planung / Kostenvoranschlag', sub: 'Kostenorientierung' },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <div id="anfrage" className={`relative ${isModal ? 'p-0' : 'py-24 sm:py-32 bg-[#FAF9F6]'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        <div className="bg-[#09182B] text-white rounded-3xl border-2 border-[#F59725]/50 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle amber ambient glow in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F59725] text-white hover:text-[#09182B] flex items-center justify-center cursor-pointer shadow-md transition-colors z-20"
              aria-label="Modal schließen"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {!isSubmitted ? (
            <div className="relative z-10">
              {/* Funnel Header */}
              <div className="text-center space-y-3 mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-black uppercase tracking-wider text-[#F59725]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>IN 60 SEKUNDEN ZUM FESTPREIS-ANGEBOT</span>
                </div>

                <h3 className="font-display font-black uppercase italic text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  STARTEN SIE IHREN <br />
                  <span className="text-[#F59725]">BAD- & FLIESEN-CHECK</span>
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-normal">
                  Beantworten Sie 3 kurze Fragen, damit Kingsley Hoffmann Ihren Bedarf direkt optimal einschätzen kann.
                </p>

                {/* Sleek Progress Bar (No steps/percentage text) */}
                <div className="pt-4 max-w-xs mx-auto">
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/10">
                    <div 
                      className="bg-gradient-to-r from-[#F59725] to-[#E46B2D] h-full transition-all duration-400 rounded-full"
                      style={{ width: `${currentStep * 25}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h4 className="font-display font-bold text-lg sm:text-xl text-center text-white">
                    1. Was planen Sie für Ihr Zuhause?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {projectOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = projectType === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setProjectType(opt.label);
                            handleNext();
                          }}
                          className={`group p-4 sm:p-5 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 sm:gap-4 transform active:scale-98 ${
                            isSelected
                              ? 'bg-white/15 border-[#F59725] shadow-lg ring-2 ring-[#F59725]'
                              : 'bg-white/5 border-white/10 hover:border-[#F59725]/60 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                              isSelected ? 'bg-[#F59725] text-[#09182B]' : 'bg-white/10 text-white group-hover:bg-[#F59725] group-hover:text-[#09182B]'
                            }`}>
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                            </div>
                            <div>
                              <p className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                                {opt.label}
                              </p>
                              <span className="text-[11px] text-[#F59725] font-semibold">
                                {opt.badge}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F59725] group-hover:translate-x-1 transition-all shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Room Size */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h4 className="font-display font-bold text-lg sm:text-xl text-center text-white">
                    2. Wie groß ist die Fläche ungefähr?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {sizeOptions.map((opt) => {
                      const isSelected = roomSize === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setRoomSize(opt.label);
                            handleNext();
                          }}
                          className={`group p-4 sm:p-5 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer transform active:scale-98 ${
                            isSelected
                              ? 'bg-white/15 border-[#F59725] shadow-lg ring-2 ring-[#F59725]'
                              : 'bg-white/5 border-white/10 hover:border-[#F59725]/60 hover:bg-white/10'
                          }`}
                        >
                          <p className="font-display font-bold text-sm sm:text-base text-white">
                            {opt.label}
                          </p>
                          <p className="text-xs text-[#F59725] mt-1 font-medium">
                            {opt.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-start pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Zurück zu Schritt 1</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Timeframe */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h4 className="font-display font-bold text-lg sm:text-xl text-center text-white">
                    3. Wann soll die Sanierung idealerweise starten?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {timeOptions.map((opt) => {
                      const isSelected = timeframe === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setTimeframe(opt.label);
                            handleNext();
                          }}
                          className={`group p-4 sm:p-5 rounded-2xl text-left border-2 transition-all duration-200 cursor-pointer transform active:scale-98 ${
                            isSelected
                              ? 'bg-white/15 border-[#F59725] shadow-lg ring-2 ring-[#F59725]'
                              : 'bg-white/5 border-white/10 hover:border-[#F59725]/60 hover:bg-white/10'
                          }`}
                        >
                          <p className="font-display font-bold text-sm sm:text-base text-white">
                            {opt.label}
                          </p>
                          <p className="text-xs text-[#F59725] mt-1 font-medium">
                            {opt.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-start pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Zurück zu Schritt 2</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                      4. Wohin dürfen wir uns zur Terminabstimmung melden?
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1">
                      Kostenfrei & unverbindlich. Kingsley Hoffmann meldet sich persönlich bei Ihnen.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1 uppercase tracking-wider">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z. B. Thomas Meier"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F59725] focus:ring-1 focus:ring-[#F59725] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1 uppercase tracking-wider">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="z. B. 0170 1234567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F59725] focus:ring-1 focus:ring-[#F59725] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1 uppercase tracking-wider">
                        E-Mail-Adresse
                      </label>
                      <input
                        type="email"
                        placeholder="name@beispiel.de"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F59725] focus:ring-1 focus:ring-[#F59725] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1 uppercase tracking-wider">
                        Ort / PLZ in der Region *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z. B. 31618 Liebenau oder Marklohe"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F59725] focus:ring-1 focus:ring-[#F59725] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1 uppercase tracking-wider">
                      Besonderheiten oder Wünsche (optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="z. B. Dachschräge vorhanden, ebenerdige Dusche gewünscht, Altbau..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#F59725] focus:ring-1 focus:ring-[#F59725] transition-colors"
                    />
                  </div>

                  {/* Summary recap pill */}
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 text-xs text-neutral-300 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Projekt:</strong> {projectType || 'Komplettbad'}</span>
                    <span><strong>Größe:</strong> {roomSize || 'Standard'}</span>
                    <span><strong>Zeitrahmen:</strong> {timeframe || 'Zeitnah'}</span>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Zurück</span>
                    </button>

                    <HeroButton
                      type="submit"
                      size="sm"
                      icon={Send}
                    >
                      Anfrage absenden
                    </HeroButton>
                  </div>

                  <p className="text-[11px] text-neutral-400 text-center pt-2">
                    🔒 Ihre Daten werden vertraulich behandelt und ausschließlich von Kingsley Hoffmann persönlich zur Beantwortung genutzt.
                  </p>
                </form>
              )}

            </div>
          ) : (
            /* Success State */
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#F59725] text-[#09182B] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" strokeWidth={2.5} />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black uppercase text-3xl sm:text-4xl text-white">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
                  Kingsley Hoffmann hat Ihre Projektdaten erhalten und meldet sich innerhalb von 24 Stunden persönlich bei Ihnen zur Terminabstimmung.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={`tel:${COMPANY.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F59725]" />
                  <span>Dringend? Direkt anrufen: {COMPANY.phone}</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
