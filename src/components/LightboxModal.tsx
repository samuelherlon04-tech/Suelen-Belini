import React, { useEffect } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title?: string;
  description?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  description,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-2xl w-full bg-[#121212] border border-[#C5A059]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header bar */}
        <div className="p-3 sm:p-4 border-b border-[#C5A059]/20 flex items-center justify-between bg-[#181818]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <h3 className="text-sm sm:text-base font-bold font-serif text-white truncate max-w-[240px] sm:max-w-md">
              {title || "Resultado Método Suelen Belini"}
            </h3>
          </div>
          <button
            id="btn-close-lightbox"
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-black flex items-center justify-center p-2 overflow-hidden">
          <img
            src={imageUrl}
            alt={title || "Foto ampliada"}
            className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512290900672-1f487e411ba2?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>

        {/* Footer info & WhatsApp button */}
        <div className="p-4 bg-[#181818] border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          {description && (
            <p className="text-xs text-zinc-300 flex-1 leading-snug">
              {description}
            </p>
          )}

          <a
            id="btn-lightbox-whatsapp"
            href={EXPERT_DATA.getWhatsAppLink(`Olá Suelen! Vi este resultado no seu site ("${title || 'Procedimento'}") e gostaria de saber se é possível fazer no meu caso.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold transition-all shadow border border-[#C5A059]/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero um resultado assim</span>
          </a>
        </div>
      </div>
    </div>
  );
};
