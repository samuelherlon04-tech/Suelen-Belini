import React from 'react';
import { Sparkles, Image, Heart, MapPin, MessageCircle, User } from 'lucide-react';

interface MarqueeLogradouroProps {
  onOpenQuiz: () => void;
}

export const MarqueeLogradouro: React.FC<MarqueeLogradouroProps> = ({ onOpenQuiz }) => {
  const sections = [
    { id: 'sobre-mim', label: 'Sobre Mim', icon: User },
    { id: 'video-apresentacao', label: 'Vídeo do Método', icon: Sparkles },
    { id: 'resultados', label: 'Prova Visual', icon: Image },
    { id: 'harmonizacao-coracao', label: 'Harmonização de 💚', icon: Heart },
    { id: 'por-que-confiar', label: 'Por Que Confiar', icon: Sparkles },
    { id: 'como-funciona', label: 'Como Funciona', icon: Sparkles },
    { id: 'onde-encontrar', label: 'Onde nos Encontrar', icon: MapPin },
    { id: 'contato', label: 'Agendar Consulta', icon: MessageCircle },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-[#121212] backdrop-blur-md border-b border-[#C5A059]/40 overflow-hidden shadow-lg">
      <div className="flex items-center py-2 px-3 max-w-6xl mx-auto">
        {/* Quick Quiz CTA Pill */}
        <button
          id="btn-marquee-quick-quiz"
          onClick={onOpenQuiz}
          className="shrink-0 mr-3 px-3.5 py-1.5 rounded-full bg-[#C5A059] text-[#121212] font-bold text-xs flex items-center gap-1.5 shadow-[0_2px_12px_rgba(197,160,89,0.4)] hover:bg-[#E2C992] active:scale-95 transition-all z-10 uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5 fill-[#121212]" />
          <span>Avaliação Rápida</span>
        </button>

        {/* Slow scrolling logradouro banner / directional links */}
        <div className="relative flex-1 overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 py-0.5">
          {sections.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                id={`nav-pill-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-[#C5A059]/20 border border-[#C5A059]/20 hover:border-[#C5A059] text-xs text-zinc-300 hover:text-[#E2C992] transition-all whitespace-nowrap active:scale-95"
              >
                <Icon className={`w-3 h-3 ${item.id === 'harmonizacao-coracao' ? 'text-[#C5A059] fill-[#C5A059]' : 'text-[#C5A059]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
