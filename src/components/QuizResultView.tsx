import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';
import { QuizAnswer } from '../types';

interface QuizResultViewProps {
  answers: QuizAnswer[];
  onGoToSite: () => void;
  onClose: () => void;
}

export const QuizResultView: React.FC<QuizResultViewProps> = ({
  answers,
  onGoToSite,
  onClose,
}) => {
  // Format answers for pre-filled WhatsApp message
  const formattedAnswers = answers.map(a => ({
    question: a.questionText,
    answer: a.selectedOption
  }));

  const whatsappQuizUrl = EXPERT_DATA.getQuizWhatsAppLink(formattedAnswers);
  const whatsappDirectUrl = EXPERT_DATA.getWhatsAppLink("Olá Suelen! Fiz a avaliação no seu site e gostaria de conversar sem compromisso para tirar dúvidas.");

  return (
    <div id="quiz-result-screen" className="text-center animate-fadeIn py-1">
      {/* Top Highlight Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#E2C992] text-xs font-extrabold tracking-wide uppercase mb-3 shadow-[0_0_15px_rgba(197,160,89,0.25)]">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
        Perfil Compatível. Você é a Paciente ideal.
      </div>

      {/* Hero Photo - Bust up in luxury golden framed container */}
      <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-3">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#C5A059] via-[#E2C992] to-[#5A5A40] p-[2px] shadow-[0_0_25px_rgba(197,160,89,0.4)] animate-pulse">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[#121212]">
            <img 
              src={EXPERT_DATA.images.bust} 
              alt={EXPERT_DATA.name} 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824813589-940a4309a475?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </div>
        </div>
        <span className="absolute -bottom-1 -right-1 bg-[#C5A059] text-[#121212] font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow border border-black/40">
          MÉTODO EXCLUSIVO
        </span>
      </div>

      {/* Hero Authority & Persuasive Headline */}
      <h2 className="text-lg sm:text-xl font-bold text-white font-serif tracking-tight leading-snug mb-1">
        {EXPERT_DATA.name}
      </h2>
      <p className="text-[11px] text-[#C5A059] font-semibold uppercase tracking-wider mb-2">
        {EXPERT_DATA.shortTitle}
      </p>

      {/* Core Persuasion Phrase */}
      <div className="bg-[#1c1c1c] border border-[#C5A059]/30 rounded-2xl p-3 sm:p-3.5 mb-4 text-left shadow-inner">
        <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed text-center font-medium">
          “Com base nas suas respostas, o Método da <strong className="text-[#E2C992] font-bold">{EXPERT_DATA.name}</strong> consegue entregar exatamente a naturalidade e segurança que você procura.”
        </p>
      </div>

      {/* Compact Answers Pill Summary for Mobile */}
      {answers.length > 0 && (
        <div className="mb-4 text-left bg-black/40 rounded-xl p-2.5 border border-[#C5A059]/20 text-[11px] text-zinc-300">
          <div className="flex items-center justify-between text-[10px] text-[#C5A059] font-bold uppercase mb-1">
            <span>Seu Foco Principal:</span>
            <span>✓ 100% Qualificada</span>
          </div>
          <p className="font-semibold text-white truncate">
            {answers[0]?.selectedOption}
          </p>
        </div>
      )}

      {/* 3 Action Buttons */}
      <div className="space-y-2.5">
        {/* Button 1: Send evaluation to Suelen */}
        <a
          id="btn-quiz-send-evaluation"
          href={whatsappQuizUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full group relative flex items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20b857] to-[#128C7E] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.55)] border border-[#C5A059]/40 transition-all transform active:scale-[0.98]"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span className="leading-tight">1- Enviar minha avaliação para Suelen no WhatsApp</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
        </a>

        {/* Button 2: Call on WhatsApp without commitment */}
        <a
          id="btn-quiz-direct-chat"
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#C5A059] hover:bg-[#b58f48] text-[#121212] font-bold text-xs sm:text-sm tracking-wide transition-all transform active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-[#121212] shrink-0" />
          <span>2- CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
        </a>

        {/* Button 3: Don't send and continue on site */}
        <button
          id="btn-quiz-continue-site"
          onClick={onGoToSite}
          className="w-full flex items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-[#C5A059]/30 text-zinc-300 hover:text-white font-medium text-xs tracking-wide transition-all"
        >
          <span>3- NÃO ENVIAR E CONTINUAR NO SITE</span>
        </button>
      </div>

      {/* Reassurance text */}
      <p className="text-[10px] text-zinc-400 mt-3 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
        Vagas limitadas por semana para garantir atendimento exclusivo.
      </p>
    </div>
  );
};
