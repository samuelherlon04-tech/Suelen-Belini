import React from 'react';
import { MessageCircle, CalendarCheck, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { CONSULTATION_STEPS, EXPERT_DATA } from '../data/expertData';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          Transparência Total
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
          Como Funciona a Sua Primeira Consulta
        </h2>

        <p className="text-sm sm:text-base text-[#5A5A40]">
          Um processo simples, acolhedor e sem complicações para você dar o primeiro passo com segurança.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
        {CONSULTATION_STEPS.map((stepItem, index) => (
          <div
            key={index}
            id={`step-card-${index}`}
            className="relative rounded-2xl bg-white border border-[#C5A059]/30 p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
          >
            {/* Step Number Bubble */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-[#C5A059] text-[#121212] font-serif font-extrabold text-base flex items-center justify-center shadow">
                {stepItem.step}
              </span>
              <span className="text-[11px] font-semibold text-[#5A5A40] uppercase tracking-wider">
                {stepItem.subtitle}
              </span>
            </div>

            <h3 className="text-lg font-serif font-bold text-[#121212] mb-2 leading-snug">
              {stepItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed font-normal">
              {stepItem.description}
            </p>
          </div>
        ))}
      </div>

      {/* Reassurance text */}
      <div className="p-4 rounded-2xl bg-[#121212] border border-[#C5A059]/30 max-w-xl mx-auto text-center shadow-sm">
        <p className="text-xs sm:text-sm text-[#E2C992] font-medium flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-[#C5A059]" />
          Sem compromisso: se entender que não é o momento ideal, você tem total liberdade.
        </p>
      </div>
    </section>
  );
};
