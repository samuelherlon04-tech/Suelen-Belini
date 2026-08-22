import React, { useState } from 'react';
import { InitialChoiceModal } from './components/InitialChoiceModal';
import { QuizModal } from './components/QuizModal';
import { MarqueeLogradouro } from './components/MarqueeLogradouro';
import { HeroSection } from './components/HeroSection';
import { VideoShowcase } from './components/VideoShowcase';
import { AboutSection } from './components/AboutSection';
import { ResultsGallery } from './components/ResultsGallery';
import { WhyTrustSection } from './components/WhyTrustSection';
import { IntermediaryCTA } from './components/IntermediaryCTA';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LoveHarmonizationSection } from './components/LoveHarmonizationSection';
import { LocationMapSection } from './components/LocationMapSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  // State for entry choice modal and interactive quiz
  const [showInitialChoice, setShowInitialChoice] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  // Lightbox state for image previews
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title?: string;
    description?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    description: '',
  });

  const handleStartQuiz = () => {
    setShowInitialChoice(false);
    setShowQuiz(true);
  };

  const handleGoToSite = () => {
    setShowInitialChoice(false);
    setShowQuiz(false);
    // Smooth scroll to top of site
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (imageUrl: string, title?: string, description?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      description,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#121212] font-sans antialiased selection:bg-[#C5A059] selection:text-white relative">
      
      {/* Subtle Artistic Dot Pattern in background */}
      <div className="fixed inset-0 dot-pattern opacity-15 pointer-events-none z-0" />
      
      <div className="relative z-10">
        {/* 1. Initial Entry Choice Modal */}
        <InitialChoiceModal
          isOpen={showInitialChoice}
          onStartQuiz={handleStartQuiz}
          onGoToSite={handleGoToSite}
          onClose={() => setShowInitialChoice(false)}
        />

        {/* 2. Full Interactive Quiz Modal & Result View */}
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          onGoToSite={handleGoToSite}
        />

        {/* 3. Sticky Top Directional Logradouro Navigation */}
        <MarqueeLogradouro onOpenQuiz={() => setShowQuiz(true)} />

        {/* 4. Main Landing Page Content (Mobile First & Expert Centered) */}
        <main className="relative overflow-hidden">
          
          {/* Dobra 1: Hero Section */}
          <HeroSection onOpenQuiz={() => setShowQuiz(true)} />

          {/* Video Presentation Section (Prominent near top) */}
          <VideoShowcase />

          {/* Dobra 2: Quem Sou Eu (Autoridade Pessoal) */}
          <AboutSection />

          {/* Dobra 3: Resultados Reais (Prova Visual & Antes e Depois) */}
          <ResultsGallery onOpenLightbox={handleOpenLightbox} />

          {/* Dobra 4: Por Que Confiar Em Mim (Diferenciais Pessoais) */}
          <WhyTrustSection />

          {/* Dobra 5: CTA Intermediário */}
          <IntermediaryCTA />

          {/* Dobra 6: Como Funciona a Primeira Consulta (3 Passos) */}
          <HowItWorksSection />

          {/* Dobra 7: Harmonização de Coração & Provas Visuais */}
          <LoveHarmonizationSection onOpenLightbox={handleOpenLightbox} />

          {/* Extra: Mapa de Localização em São José dos Pinhais */}
          <LocationMapSection />

          {/* Dobra 8: CTA Final de Decisão */}
          <FinalCTA onOpenQuiz={() => setShowQuiz(true)} />

        </main>

        {/* Dobra 9: Rodapé Minimalista com Assinatura Manual */}
        <Footer />

        {/* Floating Action WhatsApp Bubble */}
        <FloatingWhatsApp />

        {/* Lightbox for zooming in on results */}
        <LightboxModal
          isOpen={lightboxState.isOpen}
          imageUrl={lightboxState.imageUrl}
          title={lightboxState.title}
          description={lightboxState.description}
          onClose={handleCloseLightbox}
        />
      </div>

    </div>
  );
}
