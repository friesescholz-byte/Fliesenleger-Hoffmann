// Cloudflare R2 Media Base URL
export const R2_BASE = 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Fliesenleger-Hoffmann';

export const COMPANY = {
  name: 'Kingsley Hoffmann',
  subName: 'Ihr Fliesenleger',
  fullName: 'Kingsley Hoffmann — Ihr Fliesenleger',
  claim: 'Komplettbäder & Großformat-Präzision aus einer Hand',
  owner: 'Kingsley Hoffmann',
  street: 'Prinzenstraße 2',
  city: '31618 Liebenau',
  region: 'Liebenau, Marklohe, Steyerberg & Region Nienburg',
  phone: '05023 / 99 99 000',
  phoneClean: '050239999000',
  email: 'info@ihr-fliesenleger-hoffmann.de',
  hours: 'Mo – Sa: 07:30 – 18:00 Uhr',
  rating: '5.0',
  reviewCount: '19+',
};

export const IMAGES = {
  // Key showcases
  hero: `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`, // Master bathroom with double vanity, walk-in shower & tub
  owner: `${R2_BASE}/Fliesenleger-Hoffmann_09.webp`, // Kingsley Hoffmann with partner & Botament bucket in front of company van
  vans: `${R2_BASE}/Fliesenleger-Hoffmann_01.webp`, // Branded vans on client site
  guestWc: `${R2_BASE}/Fliesenleger-Hoffmann_03.webp`, // Modern guest WC with large tiles
  walkInDach: `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`, // Walk-in shower under pitch
  largeFormatShower: `${R2_BASE}/Fliesenleger-Hoffmann_11.webp`, // Room-high slabs with linear drain
  bathtubShower: `${R2_BASE}/Fliesenleger-Hoffmann_05.webp`, // Rain shower & tub combo
  pitchedRoom: `${R2_BASE}/Fliesenleger-Hoffmann_19.webp`, // Master bathroom in attic renovation
  slabsDetail: `${R2_BASE}/Fliesenleger-Hoffmann_12.webp`, // Precision tile work
  darkTiles: `${R2_BASE}/Fliesenleger-Hoffmann_10.webp`, // High-contrast black granite / slate floor
  showerWalk: `${R2_BASE}/Fliesenleger-Hoffmann_17.webp`, // Walk-in shower with seamless floor
};

export const SERVICES = [
  {
    id: 'komplettbad',
    number: '01',
    title: 'Komplettbäder & Badsanierung',
    subtitle: 'Alles aus einer Hand ohne Gewerkegerangel',
    description:
      'Vom ersten Schutz Ihrer Wohnräume über die fachgerechte Entkernung bis zur schlüsselfertigen Übergabe. Wir koordinieren alle Gewerke wie Sanitär, Heizung und Elektrik – Sie haben nur einen einzigen, verlässlichen Ansprechpartner.',
    features: [
      'Ganzheitliche Projektsteuerung von A bis Z',
      'Koordination von Sanitär- & Elektropartnern',
      'Staubschutz-Systeme für sauberes Arbeiten im Bestand',
      'Feste Terminzusagen & transparenter Festpreis',
    ],
    image: `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`,
    badge: 'Kernkompetenz',
  },
  {
    id: 'grossformat',
    number: '02',
    title: 'XXL-Großformatige Platten',
    subtitle: 'Raumhohe Ästhetik mit minimalem Fugenanteil',
    description:
      'Großformate bis zu 3 Meter Höhe verleihen Räumen eine unvergleichliche Eleganz und optische Weite. Dank moderner Spezialwerkzeuge und Erfahrung verlegen wir diese anspruchsvollen Platten vollkommen hohlraumfrei und spannungssicher.',
    features: [
      'Plattengrößen bis 120 × 280 cm und mehr',
      'Drastisch reduzierter Fugenanteil – extrem pflegeleicht',
      'Hohlraumfreie Verlegung im Buttering-Floating-Verfahren',
      'Exakte Gehrungsschnitte (Jolly-Kanten) ohne Plastikprofile',
    ],
    image: `${R2_BASE}/Fliesenleger-Hoffmann_11.webp`,
    badge: 'High-End',
  },
  {
    id: 'fugenlos',
    number: '03',
    title: 'Fugenlose & barrierefreie Duschen',
    subtitle: 'Zukunftssicher, ergonomisch und absolut dicht',
    description:
      'Schwellenlose Walk-In-Duschen schaffen Komfort für Generationen. Wir garantieren millimetergenaues Gefälle zur eleganten Edelstahl-Duschrinne und eine zertifizierte Verbundabdichtung nach DIN 18534 gegen Feuchteschäden.',
    features: [
      'Bodengleicher, schwellenloser Einstieg',
      'Hochwertige Edelstahlablaufrinnen & Wandabläufe',
      'Zertifizierte Verbundabdichtung mit Systemgarantie',
      'Schimmelresistente Silikon- und Epoxidharzfugen',
    ],
    image: `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`,
    badge: 'Barrierefrei',
  },
  {
    id: 'wohnkeramik',
    number: '04',
    title: 'Wohnkeramik, Treppen & Terrassen',
    subtitle: 'Langlebige Eleganz für Innen- & Außenbereiche',
    description:
      'Ob widerstandsfähiges Feinsteinzeug für den offenen Wohn- und Küchenbereich, elegante Treppenanlagen oder frostsichere Terrassenplatten auf Stelzlagern – wir realisieren langlebige Böden, die Generationen überdauern.',
    features: [
      'Wohnzimmer, Küchen- & Flurbeläge im Großformat',
      'Keramische Treppenbeläge mit Blockstufenoptik',
      'Frostsichere Terrassenbeläge im Außenbereich',
      'Robuste, abriebfeste Oberflächen für höchste Ansprüche',
    ],
    image: `${R2_BASE}/Fliesenleger-Hoffmann_03.webp`,
    badge: 'Innen & Außen',
  },
];

export const GALLERY_PROJECTS = [
  {
    title: 'Exklusives Master-Bad mit Doppelwaschtisch & Wanne',
    location: 'Liebenau',
    category: 'Komplettbäder',
    scope: 'XXL-Großformat, Doppelwaschtisch, Walk-In Dusche mit Sitzbank',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_16.webp`,
  },
  {
    title: 'Raumhohe Großformat-Platten mit Gehrungsschnitt',
    location: 'Marklohe',
    category: 'Großformat',
    scope: 'Plattenmaße 120 × 260 cm, fugenarme Wandflächen, Edelstahl-Jollykanten',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_11.webp`,
  },
  {
    title: 'Bodengleiche Walk-In Dusche unter der Dachschräge',
    location: 'Nienburg/Weser',
    category: 'Walk-In Duschen',
    scope: 'Schwellenloser Einstieg, verdeckter Gefälleestrich, DIN 18534 Abdichtung',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_06.webp`,
  },
  {
    title: 'Modernes Gäste-WC im warmen Greige- & Betonton',
    location: 'Steyerberg',
    category: 'Komplettbäder',
    scope: 'Großformatige Wand- und Bodenfliesen, mattschwarze Sanitärelemente',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_03.webp`,
  },
  {
    title: 'Dachgeschoss-Badsanierung mit Walk-In & Badewanne',
    location: 'Stolzenau',
    category: 'Komplettbäder',
    scope: 'Zertifizierte Verbundabdichtung, Unterzug-Integration, Granitboden',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_19.webp`,
  },
  {
    title: 'Wellness-Dusche mit Regenhimmel & Wannenbad',
    location: 'Region Nienburg',
    category: 'Walk-In Duschen',
    scope: 'Verdeckte Armaturentechnik, integrierte Ablagenischen, Keramikabdeckung',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_05.webp`,
  },
  {
    title: 'Badezimmer mit sandfarbenen Großformatfliesen',
    location: 'Liebenau',
    category: 'Großformat',
    scope: 'Freistehende Badewanne, sandfarbene Wandverkleidung, feine Fugenlinien',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_17.webp`,
  },
  {
    title: 'Präzise Gehrungsschnitte & Jolly-Kantenverlegung',
    location: 'Bücken',
    category: 'Wohnbereich',
    scope: 'Millimetergenaue 45°-Kantenschnitte ohne unansehnliche Kunststoffschienen',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_12.webp`,
  },
  {
    title: 'Kontrastreiche Schiefer- & Granitbodenbeläge',
    location: 'Landesbergen',
    category: 'Wohnbereich',
    scope: 'Feinsteinzeug in Schieferoptik, hohlraumfreie Verlegung, rutschhemmend R10',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_10.webp`,
  },
  {
    title: 'Barrierefreie Walk-In Dusche mit Sitzbank',
    location: 'Marklohe',
    category: 'Walk-In Duschen',
    scope: 'Eingebaute Sitzbank, rutschhemmende Fliesen, Wandablauf in Edelstahl',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_14.webp`,
  },
  {
    title: 'Minimalistisches Designer-Bad in Schiefergrau',
    location: 'Liebenau',
    category: 'Komplettbäder',
    scope: 'Großformatige Wandelemente, integrierte LED-Beleuchtung, fugenlos wirkend',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_18.webp`,
  },
  {
    title: 'Fugenlose Duschwandverkleidung XXL',
    location: 'Pennigsehl',
    category: 'Großformat',
    scope: 'Plattenhöhe bis unter die Decke, verdeckte Anschlüsse, leichte Reinigung',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_20.webp`,
  },
  {
    title: 'Großflächiger Wohn- & Essbereich in Holzoptik',
    location: 'Steyerberg',
    category: 'Wohnbereich',
    scope: 'Feinsteinzeug-Dielen mit natürlicher Holzmaserung, formstabil für Fußbodenheizung',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_02.webp`,
  },
  {
    title: 'Großflächige Sonnenterrasse mit Feinsteinzeug',
    location: 'Nienburg/Weser',
    category: 'Außenbereich',
    scope: 'Großformatige Terrassenplatten, frost- und witterungsbeständige Verlegung, ebenerdiger Übergang',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_21.webp`,
  },
  {
    title: 'Moderne Terrassen- & Eingangsplatten',
    location: 'Liebenau',
    category: 'Außenbereich',
    scope: 'Frostsichere 2-cm-Keramikplatten auf Stelzlagern verlegt',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_04.webp`,
  },
  {
    title: 'Komplettes Einfamilienhaus-Badezimmer modernisiert',
    location: 'Marklohe',
    category: 'Komplettbäder',
    scope: 'Vollständige Entkernung, neue Raumaufteilung, schlüsselfertige Übergabe',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_15.webp`,
  },
  {
    title: 'Edle Großformat-Flächen im Doppelbad',
    location: 'Stolzenau',
    category: 'Großformat',
    scope: 'Hochglanz-Feinsteinzeug 120 × 120 cm, hohlraumfrei buttering-floating verlegt',
    image: `${R2_BASE}/Fliesenleger-Hoffmann_22.webp`,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Erstgespräch & Bedarfsanalyse',
    time: 'Tag 1',
    description:
      'In einem kurzen, unverbindlichen Telefonat klären wir Ihre Vorstellungen, den geplanten Sanierungszeitraum und die Rahmenbedingungen Ihres Projekts.',
  },
  {
    step: '02',
    title: 'Vor-Ort-Aufmaß & Materialberatung',
    time: 'Woche 1',
    description:
      'Kingsley Hoffmann kommt persönlich zu Ihnen nach Liebenau, Marklohe oder Region Nienburg. Wir vermessen millimetergenau, bringen Fliesenmuster mit und erstellen ein transparentes Festpreis-Angebot.',
  },
  {
    step: '03',
    title: 'Staubgeschützte Umsetzung & Übergabe',
    time: '2–3 Wochen Sanierungszeit',
    description:
      'Wir schützen Ihre Laufwege, entkernen staubarm, dichten nach DIN ab und verlegen jede Fliese mit höchster Präzision. Sie übernehmen ein sauberes, sofort bezugsfertiges Traumbad.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Familie Brinkmann',
    location: 'Liebenau',
    text: 'Herr Hoffmann hat unser 30 Jahre altes Badezimmer komplett saniert. Vom ersten Tag an absolute Verlässlichkeit. Keine Verzögerungen, die Baustelle wurde jeden Abend picobello sauber hinterlassen. Das Ergebnis mit den Großformatfliesen übertrifft all unsere Erwartungen!',
    rating: 5,
    tag: 'Komplettbadsanierung',
  },
  {
    name: 'Markus T.',
    location: 'Marklohe',
    text: 'Wer Wert auf akkurate Fugen und handwerkliche Perfektion legt, ist bei Kingsley Hoffmann genau richtig. Besonders die bodengleiche Walk-In Dusche unter unserer Dachschräge wurde millimetergenau gelöst. Endlich mal ein Handwerker, der hält, was er verspricht!',
    rating: 5,
    tag: 'Walk-In Dusche & XXL-Fliesen',
  },
  {
    name: 'Sabine & Peter W.',
    location: 'Nienburg/Weser',
    text: 'Wir hatten große Angst vor Schnittstellenproblemen zwischen Sanitär und Fliesenleger. Kingsley hat das gesamte Projekt koordiniert. Alles lief Hand in Hand und pünktlich zum vereinbarten Festpreis. 5 Sterne sind hier absolut verdient.',
    rating: 5,
    tag: 'Komplettbad aus einer Hand',
  },
];

export const FAQS = [
  {
    q: 'Wie lange dauert eine typische Komplettbadsanierung?',
    a: 'Für ein durchschnittliches Einfamilienhaus-Bad dauert eine vollständige Sanierung in der Regel 2 bis 3 Arbeitswochen. Da Kingsley Hoffmann den gesamten Ablauf inklusive Abbruch, Abdichtung und Gewerke-Abstimmung steuert, entfallen zeitraubende Wartezeiten zwischen den einzelnen Arbeitsschritten.',
  },
  {
    q: 'Lohnen sich XXL-Großformatfliesen auch in kleineren Badezimmern?',
    a: 'Absolut! Entgegen weit verbreiteter Mythen lassen große Fliesenformate gerade kleine Bäder und Gäste-WCs deutlich weitläufiger und ruhiger wirken. Da es kaum störende Fugenlinien gibt, entsteht eine harmonische, elegante Wand- und Bodenfläche, die zudem wesentlich schneller gereinigt werden kann.',
  },
  {
    q: 'Wie schützen Sie den restlichen Wohnbereich vor Baustaub?',
    a: 'Sauberkeit ist unser Markenzeichen. Bevor der erste Meißelschlag erfolgt, kleben wir alle Laufwege im Treppenhaus und Flur mit reißfestem Malervlies ab. An der Badezimmertür installieren wir eine Staubschutztür mit Reißverschluss und setzen bei staubintensiven Schneidarbeiten auf gezielte Absaugsysteme.',
  },
  {
    q: 'Garantieren Sie einen verbindlichen Festpreis?',
    a: 'Ja. Nach der gemeinsamen Vor-Ort-Besichtigung und Bemusterung erhalten Sie ein detailliert aufgeschlüsseltes Angebot ohne versteckte Kosten. Wenn sich der Leistungsumfang während des Baus nicht ändert, gilt dieser Preis verbindlich.',
  },
  {
    q: 'In welchem Umkreis bieten Sie Ihre Leistungen an?',
    a: 'Unser Betriebssitz ist in Liebenau. Wir sind schwerpunktmäßig im gesamten Landkreis Nienburg/Weser tätig – unter anderem in Marklohe, Steyerberg, Stolzenau, Pennigsehl, Landesbergen, Bücken und Nienburg sowie im angrenzenden Weserbergland.',
  },
];
