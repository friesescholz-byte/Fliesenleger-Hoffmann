import React from 'react';
import { X } from 'lucide-react';
import { COMPANY } from '../data/content';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-neutral-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-neutral-100 hover:bg-[#F59725] text-neutral-600 hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-sm"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'impressum' && (
          <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
            <h3 className="text-2xl font-serif font-bold text-[#111827]">Impressum</h3>

            <div>
              <h4 className="font-bold text-[#111827]">Angaben gemäß § 5 TMG</h4>
              <p className="mt-1">
                <strong>Kingsley Hoffmann — Ihr Fliesenleger</strong><br />
                Inhaber: Kingsley Hoffmann<br />
                Prinzenstraße 2<br />
                31618 Liebenau<br />
                Deutschland
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">Kontakt</h4>
              <p className="mt-1">
                Telefon: {COMPANY.phone}<br />
                E-Mail: {COMPANY.email}<br />
                Internet: www.ihr-fliesenleger-hoffmann.de
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">Berufsbezeichnung & Kammerzugehörigkeit</h4>
              <p className="mt-1">
                Berufsbezeichnung: Fliesen-, Platten- und Mosaikleger (verliehen in der Bundesrepublik Deutschland)<br />
                Mitglied im Gewerbeverein Marklohe e.V.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
              <p className="mt-1 text-xs text-neutral-500">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        )}

        {activeModal === 'datenschutz' && (
          <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
            <h3 className="text-2xl font-serif font-bold text-[#111827]">Datenschutzerklärung</h3>

            <div>
              <h4 className="font-bold text-[#111827]">1. Datenschutz auf einen Blick</h4>
              <p className="mt-1">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">2. Verantwortliche Stelle</h4>
              <p className="mt-1">
                Kingsley Hoffmann — Ihr Fliesenleger<br />
                Prinzenstraße 2, 31618 Liebenau<br />
                E-Mail: {COMPANY.email}<br />
                Telefon: {COMPANY.phone}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">3. Datenerfassung bei Kontaktaufnahme</h4>
              <p className="mt-1">
                Wenn Sie uns per Kontaktformular, Telefon oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111827]">4. Ihre Rechte</h4>
              <p className="mt-1 text-xs text-neutral-500">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
