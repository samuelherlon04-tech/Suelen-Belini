import React from 'react';
import { MessageCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const IntermediaryCTA: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="relative rounded-3xl bg-[#121212] border border-[#C5A059]/40 p-6 sm:p-10 text-center shadow-[0_15px_45px_rgba(18,18,18,0.3)] overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E2C992] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          Dúvidas ou Inseguranças?
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-snug mb-3">
          Tem Medo de Ficar Artificial ou Não Sabe Por Onde Começar?
        </h3>

        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Na primeira avaliação, nós conversamos com calma, sem pressão e sem protocolos desnecessários. Meu papel é te orientar com honestidade absoluta sobre o que sua pele e corpo realmente precisam.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            id="btn-mid-cta-whatsapp"
            href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Tenho algumas dúvidas sobre os procedimentos e gostaria de conversar com você no WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#22c35e] to-[#128C7E] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-[0_6px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)] border border-[#C5A059]/40 transition-all transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Tirar Dúvidas com a Suelen no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-[#E2C992] font-medium mt-4 flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
          Atendimento humanizado e sem compromisso.
        </p>
      </div>
    </section>
  );
};
