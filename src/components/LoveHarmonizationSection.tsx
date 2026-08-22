import React from 'react';
import { Heart, Sparkles, ZoomIn, MessageCircle, Star } from 'lucide-react';
import { LOVE_HARMONIZATION_GALLERY, EXPERT_DATA } from '../data/expertData';

interface LoveHarmonizationSectionProps {
  onOpenLightbox: (imageUrl: string, title?: string, desc?: string) => void;
}

export const LoveHarmonizationSection: React.FC<LoveHarmonizationSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="harmonizacao-coracao" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
          Harmonização de 💚 & Provas Reais
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
          O Carinho e a Confiança de Quem Vive a Experiência
        </h2>

        <p className="text-sm sm:text-base text-[#5A5A40]">
          Resultados que vão além da estética: relatos e bastidores de pacientes transformadas pelo cuidado da Suelen Belini.
        </p>
      </div>

      {/* Testimonials and Proof Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
        {LOVE_HARMONIZATION_GALLERY.map((item, index) => (
          <div
            key={item.id || index}
            id={`love-card-${index}`}
            onClick={() => onOpenLightbox(item.url, item.patientName || 'Depoimento Real', item.comment)}
            className="group relative rounded-2xl bg-white border border-[#C5A059]/30 hover:border-[#C5A059] p-3 sm:p-4 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden text-left"
          >
            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#121212] mb-3.5">
              <img
                src={item.url}
                alt={`Prova Social Suelen Belini ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
                }}
              />

              {/* Heart Badge */}
              <div className="absolute top-2.5 right-2.5 bg-[#121212]/80 backdrop-blur-md p-1.5 rounded-full border border-[#C5A059]/40 text-[#C5A059]">
                <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
              </div>

              {/* Zoom Hover Overlay */}
              <div className="absolute inset-0 bg-[#121212]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="p-3 rounded-full bg-[#C5A059] text-[#121212] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Comment snippet */}
            {item.comment && (
              <div className="px-1">
                <div className="flex items-center gap-1 text-[#C5A059] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-xs text-[#5A5A40] leading-relaxed italic mb-2">
                  "{item.comment}"
                </p>
                {item.treatment && (
                  <span className="inline-block text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                    • {item.treatment}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fast CTA */}
      <div className="text-center">
        <a
          id="btn-love-whatsapp"
          href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Vi os depoimentos e provas no seu site e também quero viver essa transformação com você!")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#121212] hover:bg-[#1f1f1f] border border-[#C5A059] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(197,160,89,0.25)] transition-all transform active:scale-95"
        >
          <Heart className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
          <span>Quero Ser a Próxima Paciente Satisfeita</span>
        </a>
      </div>
    </section>
  );
};
