import React from 'react';
import { MessageCircle, Sparkles, Shield, Star, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface HeroSectionProps {
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section id="hero" className="relative pt-6 pb-12 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient gold/olive lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-4 w-[280px] h-[280px] bg-[#5A5A40]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Main Grid: 1 Column Mobile-First, 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (Desktop) / Top on Mobile: Hero Image & Authority Frame */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm sm:max-w-md">
            
            {/* Outer Luxury Frame in Gold */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-[#C5A059] via-[#E2C992] to-[#5A5A40] shadow-[0_20px_50px_rgba(197,160,89,0.2)]">
              <div className="relative rounded-[22px] overflow-hidden bg-[#121212] aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src={EXPERT_DATA.images.hero}
                  alt={`Especialista ${EXPERT_DATA.name}`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824813589-940a4309a475?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Subtle gradient vignette over photo base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                {/* Floating Bottom Card over Photo */}
                <div className="absolute bottom-3 inset-x-3 p-3 sm:p-3.5 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#C5A059]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-serif font-bold text-sm sm:text-base leading-tight">
                        {EXPERT_DATA.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#C5A059] font-medium tracking-wide">
                        Atendimento Pessoal & Individual
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#C5A059]/15 border border-[#C5A059]/30 px-2.5 py-1 rounded-full text-[10px] text-[#E2C992] font-bold">
                      <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                      <span>São José dos Pinhais</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-3 -left-2 sm:-left-4 bg-[#121212] border border-[#C5A059]/60 px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-ping" />
              <span className="text-[11px] font-bold text-white tracking-wide">Agenda Aberta</span>
            </div>

          </div>
        </div>

        {/* Right Column (Desktop) / Text & Headline on Mobile */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-left">
          
          {/* Top Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Especialista em Autoestima & Resultados Naturais
          </div>

          {/* First-person Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#121212] tracking-tight leading-[1.15] mb-4">
            Eu sou <span className="italic text-[#C5A059]">{EXPERT_DATA.name}</span>, e cuido da sua beleza com técnica, segurança e exclusividade.
          </h1>

          {/* Subheadline focused on transformation & safety */}
          <p className="text-base sm:text-lg text-[#5A5A40] leading-relaxed font-normal mb-6">
            Diga adeus a tratamentos genéricos. Protocolos personalizados em <strong className="text-[#121212] font-semibold">Peeling Químico</strong>, <strong className="text-[#121212] font-semibold">Fechamento de Diástase</strong> e <strong className="text-[#121212] font-semibold">Remodelamento Corporal</strong> que respeitam a sua anatomia e entregam resultados que você sente e vê no espelho.
          </p>

          {/* 3 Quick Benefit Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 text-xs sm:text-sm text-[#121212]">
            <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-[#C5A059]/20 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Sem promessas irreais: avaliação honesta</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-[#C5A059]/20 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Sem atendentes: você é cuidada por mim</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-[#C5A059]/20 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Foco em naturalidade e contornos elegantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-[#C5A059]/20 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Consultório privativo e acolhedor em SJP</span>
            </div>
          </div>

          {/* Big CTA Buttons Stack (Mobile Optimized) */}
          <div className="space-y-3">
            {/* Primary Action: WhatsApp Direct Booking */}
            <a
              id="btn-hero-whatsapp"
              href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Gostaria de agendar uma primeira avaliação no WhatsApp para conhecer seu método.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#22c35e] to-[#128C7E] text-white font-extrabold text-base tracking-wide shadow-[0_6px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.55)] border border-[#C5A059]/40 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Agendar Consulta no WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Microtext below button (Required) */}
            <div className="flex items-center gap-3 text-xs text-[#5A5A40]">
              <span className="flex items-center gap-1 text-[#121212] font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#C5A059]" /> Primeira consulta sem compromisso
              </span>
              <span>•</span>
              <button 
                id="btn-hero-quiz-link"
                onClick={onOpenQuiz}
                className="text-[#5A5A40] hover:text-[#121212] underline underline-offset-2 transition-colors cursor-pointer"
              >
                Fazer avaliação rápida primeiro
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
