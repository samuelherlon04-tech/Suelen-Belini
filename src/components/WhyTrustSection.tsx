import React from 'react';
import { ShieldCheck, Eye, Sparkles, HeartPulse, Award, Smile, CheckCircle } from 'lucide-react';
import { DIFFERENTIALS } from '../data/expertData';

export const WhyTrustSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />,
    Eye: <Eye className="w-6 h-6 text-[#C5A059]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C5A059]" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#C5A059]" />,
    Award: <Award className="w-6 h-6 text-[#C5A059]" />,
    Smile: <Smile className="w-6 h-6 text-[#C5A059]" />
  };

  return (
    <section id="por-que-confiar" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          Compromisso Ético & Pessoal
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
          Por Que Conectar a Sua Beleza Comigo?
        </h2>

        <p className="text-sm sm:text-base text-[#5A5A40]">
          Mais do que procedimentos, ofereço um olhar individualizado, com ética inegociável e cuidado artesanal.
        </p>
      </div>

      {/* 6 Differential Cards in Artistic Flair */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {DIFFERENTIALS.map((diff, index) => (
          <div
            key={index}
            id={`trust-card-${index}`}
            className="group relative rounded-2xl bg-white border border-[#C5A059]/30 hover:border-[#C5A059] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#C5A059]/25 transition-all">
              {iconMap[diff.icon] || <CheckCircle className="w-6 h-6 text-[#C5A059]" />}
            </div>

            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121212] mb-2 leading-snug">
              {diff.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed font-normal">
              {diff.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
