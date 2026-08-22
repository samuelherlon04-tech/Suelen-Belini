import React from 'react';
import { Sparkles, Heart, ShieldCheck, Check, Award, Flame } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative bg-white/90 border border-[#C5A059]/30 rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(197,160,89,0.12)] overflow-hidden">
        
        {/* Glow corner */}
        <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Expert Photo */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-xs">
              <div className="rounded-2xl p-1 bg-gradient-to-tr from-[#C5A059] via-[#E2C992] to-[#5A5A40] shadow-xl">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#121212]">
                  <img
                    src={EXPERT_DATA.images.authority}
                    alt={`Suelen Belini no atendimento`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
              </div>

              {/* Floating Personal Badge */}
              <div className="absolute -bottom-3 -right-2 bg-[#121212] border border-[#C5A059]/50 px-3.5 py-2 rounded-xl shadow-xl">
                <p className="text-[10px] uppercase font-bold text-[#C5A059] tracking-wider">Atendimento Pessoal</p>
                <p className="text-xs font-serif font-bold text-white">Suelen Belini</p>
              </div>
            </div>
          </div>

          {/* Personal Authority Text (1st Person & Human) */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
              Quem Sou Eu
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-4">
              “Acredito que o cuidado estético deve restaurar sua <span className="italic text-[#C5A059]">segurança</span>, nunca mudar quem você é.”
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-[#5A5A40] leading-relaxed mb-6 font-normal">
              <p>
                Olá, eu sou a <strong className="text-[#121212] font-semibold">Suelen Belini</strong>. Há anos venho dedicando minha carreira a entender a fundo as necessidades reais de mulheres que buscam resultados verdadeiros para a pele e o corpo.
              </p>
              <p>
                Não acredito em fórmulas prontas ou tratamentos padronizados de esteira. Minha paixão é aliar a ciência do <strong className="text-[#121212]">Peeling Químico</strong>, a precisão no <strong className="text-[#121212]">Fechamento de Diástase</strong> e a sensibilidade do <strong className="text-[#121212]">Remodelamento Corporal</strong> para entregar exatamente o contorno, o viço e a leveza que você merece.
              </p>
            </div>

            {/* Differential Bullets */}
            <div className="space-y-2.5 pt-4 border-t border-[#C5A059]/20 text-xs sm:text-sm text-[#121212]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#5A5A40]" />
                </span>
                <span><strong>Experiência Prática:</strong> Centenas de avaliações e procedimentos realizados com maestria técnica.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#5A5A40]" />
                </span>
                <span><strong>Acompanhamento Próximo:</strong> Você tem meu contato e suporte em todas as fases do tratamento.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#5A5A40]" />
                </span>
                <span><strong>Espaço Exclusivo em SJP:</strong> Privacidade, conforto e um momento só seu.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
