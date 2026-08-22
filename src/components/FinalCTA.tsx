import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface FinalCTAProps {
  onOpenQuiz: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuiz }) => {
  return (
    <section id="contato" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center relative overflow-hidden">
      {/* Background ambient glowing gradient */}
      <div className="relative rounded-3xl bg-[#121212] border border-[#C5A059]/40 p-8 sm:p-14 shadow-[0_25px_60px_rgba(18,18,18,0.4)] overflow-hidden">
        
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#5A5A40]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/35 text-[#E2C992] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          Dê o Primeiro Passo Hoje
        </div>

        {/* Big Decision Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
          A Sua Beleza Merece o Cuidado de Quem Entende a Sua Singularidade.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Garanta seu horário de avaliação presencial para traçarmos o melhor plano para o seu <strong className="text-[#E2C992]">Peeling Químico</strong>, <strong className="text-[#E2C992]">Diástase</strong> ou <strong className="text-[#E2C992]">Remodelamento Corporal</strong>.
        </p>

        {/* Main CTA Button Container */}
        <div className="max-w-md mx-auto space-y-3 mb-6">
          <a
            id="btn-final-whatsapp"
            href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Quero agendar minha primeira avaliação presencial com você para conhecer seus protocolos exclusivos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#22c35e] to-[#128C7E] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-[0_6px_35px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_45px_rgba(37,211,102,0.55)] border border-[#C5A059]/40 transition-all transform active:scale-95"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Agendar Primeira Consulta no WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            id="btn-final-quiz"
            onClick={onOpenQuiz}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-[#C5A059]/30 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ou faça a Avaliação Rápida em 30 segundos</span>
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1 text-[#E2C992] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> Primeira consulta sem compromisso
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#E2C992] font-medium">
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" /> Atendimento exclusivo por Suelen Belini
          </span>
        </div>

      </div>
    </section>
  );
};
