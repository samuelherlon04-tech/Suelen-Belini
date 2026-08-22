import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, ArrowRight, X, Shield, Star, Wifi, Battery, Signal } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface InitialChoiceModalProps {
  isOpen: boolean;
  onStartQuiz: () => void;
  onGoToSite: () => void;
  onClose: () => void;
}

export const InitialChoiceModal: React.FC<InitialChoiceModalProps> = ({
  isOpen,
  onStartQuiz,
  onGoToSite,
  onClose,
}) => {
  const [currentTime, setCurrentTime] = useState('09:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Smartphone Device Mockup Wrapper */}
      <div 
        id="initial-choice-card"
        className="relative w-full max-w-[390px] my-auto bg-[#121212] border-[5px] sm:border-[8px] border-[#222222] ring-1 ring-[#C5A059]/40 rounded-[38px] sm:rounded-[48px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-center text-[#f4f2ee] overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[890px]"
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#5A5A40]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Mobile Device Status Bar (iPhone Dynamic Island Style) */}
        <div className="relative pt-2.5 pb-2 px-5 bg-[#121212] border-b border-white/5 flex items-center justify-between text-[11px] font-semibold text-zinc-300 select-none z-20 shrink-0">
          <span className="w-12 text-left font-medium tracking-tight text-white">{currentTime}</span>

          {/* Dynamic Island Capsule */}
          <div className="w-24 sm:w-28 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/80 animate-pulse" />
          </div>

          <div className="w-12 flex items-center justify-end gap-1.5 text-zinc-300">
            <Signal className="w-3 h-3 text-zinc-300" />
            <Wifi className="w-3 h-3 text-zinc-300" />
            <Battery className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          </div>
        </div>

        {/* Close Button Inside Screen */}
        <button 
          id="btn-close-initial-modal"
          onClick={onClose}
          className="absolute top-10 sm:top-12 right-3.5 sm:right-4 p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-thumb-zinc-700">
          {/* Floating expert thumbnail with status */}
          <div className="flex justify-center mb-3">
            <div className="relative">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-[#C5A059] via-[#E2C992] to-[#5A5A40] shadow-lg">
                <img 
                  src={EXPERT_DATA.images.bust} 
                  alt={EXPERT_DATA.name} 
                  className="w-full h-full object-cover object-top rounded-full bg-[#121212]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824813589-940a4309a475?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#C5A059] border-2 border-[#121212] rounded-full flex items-center justify-center shadow">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
              </span>
            </div>
          </div>

          {/* Tag & Authority Header */}
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E2C992] text-[10px] font-semibold tracking-wider uppercase mb-1.5">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            Atendimento Exclusivo
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-0.5 font-serif">
            {EXPERT_DATA.name}
          </h2>
          <p className="text-[11px] text-[#C5A059] font-medium tracking-wide uppercase mb-2.5">
            {EXPERT_DATA.shortTitle}
          </p>

          <p className="text-xs sm:text-sm text-zinc-300 mb-4 sm:mb-5 leading-relaxed">
            Como você prefere iniciar sua experiência com a especialista?
          </p>

          {/* 3 Main Action Choices */}
          <div className="space-y-2.5">
            {/* Choice 1: Start Quiz */}
            <button
              id="btn-modal-start-quiz"
              onClick={onStartQuiz}
              className="w-full group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#C5A059] hover:bg-[#b58f48] text-[#121212] font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(197,160,89,0.35)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.5)] transition-all transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-black/15 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#121212]" />
                </div>
                <div>
                  <span className="block font-extrabold text-xs sm:text-sm leading-tight">1. Fazer Avaliação Rápida</span>
                  <span className="block text-[10px] sm:text-[11px] font-medium text-black/80">Descubra em 30s se seu perfil é compatível</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Choice 2: Direct WhatsApp */}
            <a
              id="btn-modal-direct-whatsapp"
              href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Gostaria de falar diretamente com você para saber sobre consultas e procedimentos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-xs sm:text-sm transition-all transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <span className="block font-bold text-xs sm:text-sm leading-tight text-white">2. Falar Direto no WhatsApp</span>
                  <span className="block text-[10px] sm:text-[11px] font-normal text-zinc-400">Atendimento humanizado sem intermediários</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Choice 3: Direct to Website */}
            <button
              id="btn-modal-direct-site"
              onClick={onGoToSite}
              className="w-full flex items-center justify-center py-2.5 sm:py-3 px-3 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 border border-[#C5A059]/30 text-zinc-300 hover:text-white font-medium text-[11px] sm:text-xs tracking-wide transition-all"
            >
              <span>3. Explorar o Site & Ver Resultados Reais</span>
            </button>
          </div>

          {/* Reassurance footer */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-3 text-[10px] text-zinc-400">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#C5A059]" /> Privacidade 100%
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" /> São José dos Pinhais
            </span>
          </div>
        </div>

        {/* iPhone Home Indicator Bottom Bar */}
        <div className="pt-1 pb-2 bg-[#121212] shrink-0">
          <div className="w-28 h-1 bg-white/20 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

