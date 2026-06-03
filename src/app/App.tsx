import { useEffect } from 'react';
import ogImage from '../imports/Captura_de_pantalla_2026-06-01_a_la_s__11.52.05_p.m..png';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TableOfContents from './components/TableOfContents';
import SectionSplitter from './components/SectionSplitter';
import AboutSection from './components/AboutSection';
import AboutSectionDark from './components/AboutSectionDark';
import ProblemSection from './components/ProblemSection';
import OpportunitySection from './components/OpportunitySection';
import AsolateSolutionSection from './components/AsolateSolutionSection';
import AudienceSection from './components/AudienceSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import CompetitorsSection from './components/CompetitorsSection';
import CapsulePlanner from './components/CapsulePlanner';
import BusinessModel from './components/BusinessModel';
import BusinessModelCarousel from './components/BusinessModelCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ClosingSection from './components/ClosingSection';

function setMeta(property: string, content: string, attr = 'property') {
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function App() {
  useEffect(() => {
    const title = 'Asolate — Curated Latin American Essentials';
    const description =
      'Asolate is a brand built around curated essentials and strategic partnerships with Latin American makers. Quality, sustainability, and cultural identity in every piece.';
    const imageUrl = window.location.origin + ogImage;

    document.title = title;

    // Ensure viewport meta for mobile
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');

    // Standard
    setMeta('description', description, 'name');
    setMeta('theme-color', '#0f3063', 'name');

    // Open Graph
    setMeta('og:type', 'website');
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:image', imageUrl);
    setMeta('og:image:width', '1200');
    setMeta('og:image:height', '630');
    setMeta('og:site_name', 'Asolate');

    // Twitter / X
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', imageUrl, 'name');
  }, []);

  return (
    <div className="antialiased selection:bg-[#0052FF] selection:text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #0A1D37;
          line-height: 1.6;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 99px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        .font-display {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        p {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <Header />

      <main className="space-y-24 md:space-y-32 pb-24">
        <HeroSection />

        <TableOfContents />

        <SectionSplitter id="what-is-asolate" number="01" title="What is Asolate?" />

        <AboutSection />

        <AboutSectionDark />

        <SectionSplitter id="problem" number="02" title="Problem" />

        <ProblemSection />

        <SectionSplitter id="opportunity" number="03" title="Opportunity" />

        <OpportunitySection />

        <AsolateSolutionSection />

        <SectionSplitter id="audience" number="04" title="Audience" />

        <TargetAudienceSection />

        <SectionSplitter id="competitors" number="05" title="Competitors" />

        <CompetitorsSection />

        <SectionSplitter id="model" number="06" title="Business model" />

        {/* <BusinessModel /> */}

        <BusinessModelCarousel />

        {/* <CapsulePlanner /> */}

        {/* <ContactSection /> */}
      </main>

      {/* <Footer /> */}

      <ClosingSection />
    </div>
  );
}