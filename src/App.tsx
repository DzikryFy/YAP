import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { WhyUs } from './components/WhyUs';
import { CoreValues } from './components/CoreValues';
import { EducationalUnits } from './components/EducationalUnits';
import { Testimonials } from './components/Testimonials';
import { NewsEvents } from './components/NewsEvents';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { EDUCATIONAL_UNITS, UnitItem, NewsItem, CoreValueItem, FeatureItem } from './data/content';

export default function App() {
  // Modal states
  const [ppdbOpen, setPpdbOpen] = useState(false);
  const [defaultPpdbUnit, setDefaultPpdbUnit] = useState('mi');
  const [visitOpen, setVisitOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedValue, setSelectedValue] = useState<CoreValueItem | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    let element: HTMLElement | null = null;
    if (sectionId === 'hero') element = document.getElementById('hero-section');
    else if (sectionId === 'why-us') element = document.getElementById('why-us-section');
    else if (sectionId === 'core-values') element = document.getElementById('core-values-section');
    else if (sectionId === 'units') element = document.getElementById('units-section');
    else if (sectionId === 'testimonials') element = document.getElementById('testimonials-section');
    else if (sectionId === 'news') element = document.getElementById('news-section');
    else if (sectionId === 'footer') element = document.getElementById('footer-section');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPPDB = (unitId?: string) => {
    if (unitId) setDefaultPpdbUnit(unitId);
    setPpdbOpen(true);
  };

  const handleSelectUnitById = (unitId: string) => {
    const unit = EDUCATIONAL_UNITS.find((u) => u.id === unitId);
    if (unit) {
      setSelectedUnit(unit);
    } else {
      scrollToSection('units');
    }
  };

  return (
    <div id="yayasan-asih-putera-app" className="min-h-screen flex flex-col bg-[#f7faf9] selection:bg-[#0F7A60] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar 
        onOpenSearch={() => setSearchOpen(true)}
        onSelectNav={(item) => {
          if (item === 'Donasi') alert('Informasi Rekening Donasi & Wakaf Yayasan Asih Putera: BSI 7001234567 a.n. Yayasan Asih Putera');
          else if (item === 'Karier') alert('Informasi Rekrutmen & Karier Guru/Karyawan Yayasan Asih Putera 2025/2026.');
          else if (item === 'Orang Tua') alert('Portal Akademik & Komunikasi Orang Tua Siswa Asih Putera.');
          else if (item === 'Alumni') alert('Ikatan Alumni Asih Putera (IKAP) Lintas Angkatan.');
        }}
      />

      {/* 2. Main Navigation Header */}
      <Header
        onOpenPPDB={() => handleOpenPPDB()}
        onNavigate={scrollToSection}
        onSelectUnit={handleSelectUnitById}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenPPDB={() => handleOpenPPDB()}
          onExplorePrograms={() => scrollToSection('units')}
        />

        {/* Divider */}
        <SectionDivider />

        {/* 4. Why Us / "Mengapa Asih Putera?" */}
        <WhyUs
          onCardClick={(feature) => setSelectedFeature(feature)}
        />

        {/* Divider */}
        <SectionDivider />

        {/* 5. Core Values / "Nilai Inti Asih Putera" */}
        <CoreValues
          onSelectValue={(val) => setSelectedValue(val)}
        />

        {/* Divider */}
        <SectionDivider />

        {/* 6. Educational Units / "Unit Pendidikan" */}
        <EducationalUnits
          onSelectUnit={(unit) => setSelectedUnit(unit)}
        />

        {/* Divider */}
        <SectionDivider />

        {/* 7. Testimonials / "Apa Kata Orang Tua & Alumni" */}
        <Testimonials />

        {/* Divider */}
        <SectionDivider />

        {/* 8. News, Agenda & Gallery / "Berita, Agenda & Galeri" */}
        <NewsEvents
          onSelectNews={(news) => setSelectedNews(news)}
        />

        {/* Divider */}
        <SectionDivider />

        {/* 9. CTA Banner Section */}
        <CtaSection
          onOpenPPDB={() => handleOpenPPDB()}
          onScheduleVisit={() => setVisitOpen(true)}
        />
      </main>

      {/* 10. Footer Section */}
      <Footer
        onNavigate={scrollToSection}
        onSelectUnit={handleSelectUnitById}
        onOpenPPDB={() => handleOpenPPDB()}
      />

      {/* 11. Interactive Modals & Dialogs */}
      <Modals
        ppdbOpen={ppdbOpen}
        onClosePPDB={() => setPpdbOpen(false)}
        defaultUnit={defaultPpdbUnit}
        visitOpen={visitOpen}
        onCloseVisit={() => setVisitOpen(false)}
        selectedUnit={selectedUnit}
        onCloseUnit={() => setSelectedUnit(null)}
        selectedNews={selectedNews}
        onCloseNews={() => setSelectedNews(null)}
        selectedValue={selectedValue}
        onCloseValue={() => setSelectedValue(null)}
        selectedFeature={selectedFeature}
        onCloseFeature={() => setSelectedFeature(null)}
        searchOpen={searchOpen}
        onCloseSearch={() => setSearchOpen(false)}
        onSelectUnitFromSearch={(unitId) => handleSelectUnitById(unitId)}
      />
    </div>
  );
}
