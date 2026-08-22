import React from 'react';
import { Instagram, MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#121212] border-t border-[#C5A059]/30 pt-12 pb-24 sm:pb-12 px-4 sm:px-6 text-zinc-400 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Handwritten Style Signature */}
        <div className="mb-4">
          <span className="font-['Alex_Brush'] font-serif text-4xl sm:text-5xl text-[#C5A059] tracking-wider block drop-shadow-md select-none">
            {EXPERT_DATA.name}
          </span>
          <span className="text-[11px] text-[#E2C992] uppercase tracking-widest font-semibold block mt-1">
            {EXPERT_DATA.shortTitle}
          </span>
        </div>

        {/* Address and details */}
        <div className="max-w-md mx-auto space-y-1.5 mb-6 text-zinc-300 text-xs">
          <p className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>{EXPERT_DATA.address}</span>
          </p>
          <p className="text-zinc-400 text-[11px]">
            Atendimento exclusivo sob agendamento prévio.
          </p>
        </div>

        {/* Social & Contact Buttons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            id="footer-instagram"
            href={EXPERT_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-[#C5A059]/30 text-zinc-200 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>{EXPERT_DATA.instagramHandle}</span>
          </a>

          <a
            id="footer-whatsapp"
            href={EXPERT_DATA.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Copyright and signature */}
        <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <p>
            © {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-[#E2C992]">
            Feito com <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" /> para valorizar sua beleza natural
          </p>
        </div>

      </div>
    </footer>
  );
};
