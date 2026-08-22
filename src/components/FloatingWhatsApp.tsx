import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Mini notification bubble on mobile/desktop */}
      <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#C5A059]/40 shadow-lg text-[11px] text-white">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>Fale direto com a Suelen</span>
      </div>

      {/* Main floating button */}
      <a
        id="btn-floating-whatsapp"
        href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Estou no seu site e gostaria de tirar uma dúvida rápida sobre os procedimentos.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 border border-[#C5A059]/40 transition-all"
        aria-label="Abrir WhatsApp"
      >
        {/* Breathing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
