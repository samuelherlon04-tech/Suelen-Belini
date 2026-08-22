import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sparkles, Volume2, VolumeX, Maximize2, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay with sound prevented or waiting for interaction:", err);
            setIsPlaying(true);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="video-apresentacao" className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative bg-white/90 border border-[#C5A059]/30 rounded-3xl p-5 sm:p-8 shadow-[0_15px_40px_rgba(197,160,89,0.12)] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5A5A40]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left / Top on mobile: Video Player with AutoPlay & Controls */}
          <div className="lg:col-span-6 order-1">
            <div 
              ref={containerRef}
              className="relative group rounded-2xl overflow-hidden border border-[#C5A059]/50 shadow-2xl bg-[#121212] aspect-[9/16] sm:aspect-[4/5] max-h-[500px] mx-auto flex items-center justify-center cursor-pointer select-none"
              onClick={togglePlay}
              onMouseEnter={() => setShowControls(true)}
            >
              
              {/* HTML5 Native Video element with AutoPlay & Looping */}
              {!hasError ? (
                <video
                  ref={videoRef}
                  src={EXPERT_DATA.videoUrl}
                  poster={EXPERT_DATA.images.authority}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setHasError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Fallback Embed with AutoPlay */
                <iframe
                  src="https://imgur.com/DTcYJEu/embed?pub=true&autoplay=1&muted=1"
                  title="Procedimento Suelen Belini"
                  className="w-full h-full border-0 pointer-events-auto"
                  allowFullScreen
                  allow="autoplay; encrypted-media; picture-in-picture"
                />
              )}

              {/* Top Bar: Automatic Playback Status Badge & Sound Toggle */}
              <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#C5A059]/40 text-white text-[11px] font-semibold shadow-md pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Em andamento automático</span>
                </div>

                <button
                  type="button"
                  id="btn-video-sound-toggle"
                  onClick={toggleMute}
                  className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C5A059] hover:bg-[#b58f48] text-[#121212] font-bold text-xs shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label={isMuted ? "Ativar áudio" : "Silenciar áudio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Ativar Som</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-950 animate-bounce" />
                      <span>Som Ativo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Center Play/Pause Overlay Icon (shows briefly on pause/hover) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#C5A059] p-[2px] shadow-[0_0_30px_rgba(197,160,89,0.7)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#C5A059] fill-[#C5A059] ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Video Control Strip */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-20 flex items-center justify-between text-white text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Reiniciar vídeo"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-zinc-300 font-medium hidden xs:inline">
                    Método Suelen Belini
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Tela Cheia"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right / Bottom on mobile: Designated Copy & Highlights */}
          <div className="lg:col-span-6 order-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#5A5A40] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Sensibilidade & Técnica Exclusiva
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#121212] tracking-tight leading-snug mb-3">
              A Arte de Realçar a Sua Beleza com Propósito
            </h3>

            {/* Artistic Flair Designated Copy Block with left border */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FDFCFB] border-l-4 border-[#C5A059] border-y border-r border-[#C5A059]/20 mb-4 shadow-xs">
              <p className="text-sm sm:text-base text-[#5A5A40] leading-relaxed font-medium italic">
                "{EXPERT_DATA.videoCopy}"
              </p>
            </div>

            <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#121212]">
              <div className="flex items-center gap-2.5 bg-white/70 p-2 rounded-xl border border-[#C5A059]/15">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Protocolos seguros para Peeling Químico sem agressões extremas</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 p-2 rounded-xl border border-[#C5A059]/15">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Recuperação da diástase e reabilitação muscular do abdômen</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/70 p-2 rounded-xl border border-[#C5A059]/15">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Remodelamento corporal focado em contorno natural e harmônico</span>
              </div>
            </div>

            {/* Direct CTA */}
            <a
              id="btn-video-whatsapp"
              href={EXPERT_DATA.getWhatsAppLink("Olá Suelen! Assisti ao seu vídeo em andamento no site e me encantei com a sua sensibilidade e técnica. Gostaria de agendar uma avaliação!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#121212] hover:bg-[#202020] text-white border border-[#C5A059] font-bold text-sm shadow-[0_4px_20px_rgba(197,160,89,0.25)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.4)] transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Quero uma Avaliação com a Suelen</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

