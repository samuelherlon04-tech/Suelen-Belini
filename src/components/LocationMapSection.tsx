import React from 'react';
import { MapPin, Navigation, Sparkles, Phone, Clock, ExternalLink } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const LocationMapSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EXPERT_DATA.address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(EXPERT_DATA.address)}`;

  return (
    <section id="onde-encontrar" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          Localização Privilegiada
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
          Onde nos Encontrar em São José dos Pinhais
        </h2>

        <p className="text-sm sm:text-base text-[#5A5A40]">
          Um espaço exclusivo, discreto e de fácil acesso, preparado especialmente para o seu momento de autocuidado.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Info Card */}
        <div className="lg:col-span-5 bg-white border border-[#C5A059]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm text-left">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center mb-4 text-[#C5A059]">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#121212] mb-2">
              Consultório Suelen Belini
            </h3>
            
            <p className="text-sm text-[#121212] leading-relaxed mb-6 font-medium">
              {EXPERT_DATA.address}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#5A5A40] mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Atendimento com horário previamente agendado</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>WhatsApp: {EXPERT_DATA.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Edifício com portaria, elevador e segurança</span>
              </div>
            </div>
          </div>

          {/* Quick Route Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#C5A059]/20">
            <a
              id="btn-map-google"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121212] hover:bg-[#222222] border border-[#C5A059]/40 text-white text-xs font-bold transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#C5A059]" />
              <span>Google Maps</span>
            </a>

            <a
              id="btn-map-waze"
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00D6FF]/10 hover:bg-[#00D6FF]/20 border border-[#00D6FF]/30 text-[#0088cc] text-xs font-bold transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir no Waze</span>
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-sm bg-white min-h-[320px] sm:min-h-[380px]">
          <iframe
            title="Localização do consultório Suelen Belini"
            src="https://maps.google.com/maps?q=Rua+Voluntarios+da+Patria,+1269,+Sao+Jose+dos+Pinhais&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[320px] border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};
