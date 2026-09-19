import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/content';

export default function Footer({ onOpenLegal }) {
  const regions = [
    'Liebenau',
    'Marklohe',
    'Nienburg/Weser',
    'Steyerberg',
    'Stolzenau',
    'Pennigsehl',
    'Bücken',
    'Landesbergen',
    'Landkreis Nienburg',
  ];

  return (
    <footer className="bg-[#09182B] text-white text-sm relative overflow-hidden border-t-2 border-[#F59725]/30">
      
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img 
                src="/logo-icon.webp" 
                alt="Kingsley Hoffmann Logo" 
                className="h-11 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white leading-tight">
                  {COMPANY.name}
                </span>
                <span className="text-[11px] text-[#F59725] font-bold tracking-wider uppercase">
                  {COMPANY.subName} • Fachbetrieb
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-300 leading-relaxed font-normal pt-2">
              Ihr spezialisierter Fachbetrieb für hochwertige Komplettbäder, XXL-Großformatfliesen und barrierefreie Bäder in Liebenau und der gesamten Region Nienburg/Weser.
            </p>

            {/* Quick Navigation Links */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link to="/#leistungen" className="text-[#F59725] hover:text-white transition-colors">
                Leistungen
              </Link>
              <span className="text-neutral-600">•</span>
              <Link to="/ueber-uns" className="text-[#F59725] hover:text-white transition-colors">
                Über uns
              </Link>
              <span className="text-neutral-600">•</span>
              <Link to="/projekte" className="text-[#F59725] hover:text-white transition-colors">
                Projekte
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#F59725] pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Mitglied im Gewerbeverein Marklohe e.V.</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-white">
              Direkter Kontakt
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59725] shrink-0 mt-0.5" />
                <span>{COMPANY.street}, {COMPANY.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59725] shrink-0" />
                <a 
                  href={`tel:${COMPANY.phoneClean}`}
                  className="hover:text-white font-bold transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59725] shrink-0" />
                <a 
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1 text-neutral-400">
                <Clock className="w-4 h-4 text-[#F59725]/70 shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional Einzugsgebiet */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-white">
              Regionales Einzugsgebiet
            </h4>
            <p className="text-xs text-neutral-300 mb-3">
              Wir sanieren und verlegen schlüsselfertig in folgenden Orten und Umgebung:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((region) => (
                <span
                  key={region}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#F59725] hover:text-[#09182B] text-neutral-300 text-[11px] font-medium transition-colors cursor-default"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Legal Navigation */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {COMPANY.fullName}. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-[#F59725] transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-[#F59725] transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
