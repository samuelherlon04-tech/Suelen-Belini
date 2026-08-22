import React, { useState } from 'react';
import { Sparkles, ZoomIn, ShieldCheck, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { REAL_RESULTS_GALLERY, EXPERT_DATA } from '../data/expertData';
import { GalleryItem } from '../types';

interface ResultsGalleryProps {
  onOpenLightbox: (imageUrl: string, title?: string, desc?: string) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all'
    ? REAL_RESULTS_GALLERY
    : REAL_RESULTS_GALLERY.filter(item => item.tag?.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="resultados" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          Transformações Reais
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
          Resultados Reais de Quem Confiou no Método
        </h2>
        
        <p className="text-sm sm:text-base text-[#5A5A40]">
          Veja a evolução de pacientes que recuperaram a firmeza da pele, contorno corporal e a autoestima em nosso consultório.
        </p>
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id || index}
            id={`result-card-${index}`}
            onClick={() => onOpenLightbox(item.url, item.title, item.description)}
            className="group relative rounded-2xl bg-white border border-[#C5A059]/30 hover:border-[#C5A059] p-2.5 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#121212]">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512290900672-1f487e411ba2?auto=format&fit=crop&q=80&w=600";
                }}
              />

              {/* Tag overlay */}
              {item.tag && (
                <div className="absolute top-2.5 left-2.5 bg-[#121212]/85 backdrop-blur-md border border-[#C5A059]/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#E2C992]">
                  {item.tag}
                </div>
              )}

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[#121212]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="p-3 rounded-full bg-[#C5A059] text-[#121212] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Title & Description under photo */}
            <div className="p-2 sm:p-3 text-left">
              <h4 className="text-xs sm:text-sm font-bold text-[#121212] font-serif leading-tight line-clamp-1 mb-1">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-[11px] text-[#5A5A40] leading-snug line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mandatory Disclaimer */}
      <div className="text-center pt-3 pb-6 border-t border-[#C5A059]/20">
        <p className="text-xs text-[#5A5A40] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          *Aviso: Os resultados podem variar de pessoa para pessoa de acordo com a individualidade biológica.
        </p>
      </div>

      {/* Mid-Gallery Action Bar */}
      <div className="text-center">
        <a
          id="btn-gallery-whatsapp"
          href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Vi os resultados do seu método no site e me interessei muito. Gostaria de saber qual o protocolo mais indicado para o meu caso.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#121212] hover:bg-[#1f1f1f] border border-[#C5A059] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(197,160,89,0.2)] transition-all transform active:scale-95"
        >
          <span>Quero Conhecer o Protocolo para o Meu Caso</span>
          <ArrowRight className="w-4 h-4 text-[#C5A059]" />
        </a>
      </div>
    </section>
  );
};
