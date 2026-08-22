import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, CheckCircle2, ShieldCheck, X, Wifi, Battery, Signal } from 'lucide-react';
import { EXPERT_DATA, QUIZ_QUESTIONS } from '../data/expertData';
import { QuizAnswer } from '../types';
import { QuizResultView } from './QuizResultView';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToSite: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onGoToSite,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStatusText, setAnalysisStatusText] = useState('Analisando suas respostas...');
  const [isCompleted, setIsCompleted] = useState(false);
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

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setCurrentStep(0);
      setAnswers([]);
      setIsAnalyzing(false);
      setAnalysisProgress(0);
      setIsCompleted(false);
    }
  }, [isOpen]);

  // Loading animation handler when last question is answered
  const handleSelectOption = (optionLabel: string) => {
    const currentQ = QUIZ_QUESTIONS[currentStep];
    const newAnswers = [
      ...answers.filter(a => a.questionId !== currentQ.id),
      {
        questionId: currentQ.id,
        questionText: currentQ.question,
        selectedOption: optionLabel
      }
    ];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 180);
    } else {
      // Start analyzing
      setIsAnalyzing(true);
      let progress = 10;
      setAnalysisProgress(progress);
      setAnalysisStatusText('Analisando perfil biológico e objetivos...');

      const interval = setInterval(() => {
        progress += 18;
        if (progress >= 100) {
          clearInterval(interval);
          setAnalysisProgress(100);
          setAnalysisStatusText('Diagnóstico preliminar concluído com sucesso!');
          setTimeout(() => {
            setIsAnalyzing(false);
            setIsCompleted(true);
          }, 600);
        } else if (progress > 60) {
          setAnalysisStatusText('Cruzando com protocolos exclusivos da Suelen Belini...');
        } else if (progress > 30) {
          setAnalysisStatusText('Verificando compatibilidade com Peeling, Diástase e Remodelamento...');
        }
        setAnalysisProgress(Math.min(progress, 100));
      }, 350);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Smartphone Device Mockup Wrapper */}
      <div 
        id="quiz-mobile-device"
        className="relative w-full max-w-[400px] my-auto bg-[#121212] border-[5px] sm:border-[8px] border-[#222222] ring-1 ring-[#C5A059]/40 rounded-[38px] sm:rounded-[48px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-[#f4f2ee] overflow-hidden animate-fadeIn flex flex-col max-h-[96vh] sm:max-h-[890px]"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#5A5A40]/25 rounded-full blur-3xl pointer-events-none" />

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

        {/* App Header Inside Phone Screen */}
        <div className="relative px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#C5A059]/20 flex items-center justify-between bg-[#161616]/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Story Ring Mini Framed Photo of Suelen */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#C5A059] via-[#E2C992] to-[#5A5A40] shadow-md">
                <img 
                  src={EXPERT_DATA.images.bust} 
                  alt={EXPERT_DATA.name} 
                  className="w-full h-full object-cover object-top rounded-full bg-[#121212]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824813589-940a4309a475?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#C5A059] border-2 border-[#121212] rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs sm:text-sm font-bold font-serif text-white tracking-wide leading-tight">
                  {EXPERT_DATA.name}
                </h3>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E2C992] uppercase tracking-wider font-bold">
                  App
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium truncate max-w-[170px]">
                {EXPERT_DATA.shortTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="btn-quiz-skip-to-site"
              onClick={onGoToSite}
              className="text-[10px] text-zinc-300 hover:text-[#E2C992] px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              Pular
            </button>
            <button
              id="btn-quiz-close"
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Fechar Quiz"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Phone Screen Content Area */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 scrollbar-thin scrollbar-thumb-zinc-700">

          {/* State 1: In-Progress Quiz Question */}
          {!isAnalyzing && !isCompleted && (
            <div>
              {/* Step progress bar */}
              <div className="mb-3.5">
                <div className="flex items-center justify-between text-[10px] font-medium text-zinc-400 mb-1.5">
                  <span className="text-[#E2C992] font-semibold">Etapa {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído</span>
                </div>
                <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden p-[1px] border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-[#C5A059] to-[#E2C992] rounded-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                    style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-3.5">
                <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold text-[#C5A059] tracking-wider mb-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" /> Avaliação Interativa
                </span>
                <h2 className="text-sm sm:text-base font-bold text-white leading-snug font-serif">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h2>
                {QUIZ_QUESTIONS[currentStep].subtitle && (
                  <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                    {QUIZ_QUESTIONS[currentStep].subtitle}
                  </p>
                )}
              </div>

              {/* Answer Options (Optimized for Mobile Touch) */}
              <div className="space-y-2 mb-4">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => {
                  const currentAnswer = answers.find(a => a.questionId === QUIZ_QUESTIONS[currentStep].id);
                  const isSelected = currentAnswer?.selectedOption === opt.label;

                  return (
                    <button
                      key={idx}
                      id={`quiz-opt-${currentStep}-${idx}`}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`w-full group relative text-left p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all transform active:scale-[0.98] ${
                        isSelected
                          ? 'bg-[#C5A059]/20 border-[#C5A059] shadow-[0_0_12px_rgba(197,160,89,0.3)]'
                          : 'bg-[#181818] hover:bg-[#202020] border-white/10 hover:border-[#C5A059]/40'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected 
                            ? 'bg-[#C5A059] border-[#C5A059] text-black' 
                            : 'border-zinc-500 group-hover:border-[#C5A059]'
                        }`}>
                          {isSelected ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-black fill-current" />
                          ) : (
                            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 group-hover:text-white">
                              {String.fromCharCode(65 + idx)}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs sm:text-sm font-semibold leading-snug transition-colors ${
                            isSelected ? 'text-white font-bold' : 'text-zinc-200 group-hover:text-white'
                          }`}>
                            {opt.label}
                          </p>
                          {opt.description && (
                            <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 leading-tight">
                              {opt.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                {currentStep > 0 ? (
                  <button
                    id="btn-quiz-prev"
                    onClick={handlePrevStep}
                    className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" /> Voltar
                  </button>
                ) : (
                  <div />
                )}

                <button
                  id="btn-quiz-skip-bottom"
                  onClick={onGoToSite}
                  className="text-[11px] text-zinc-400 hover:text-[#E2C992] underline underline-offset-4"
                >
                  Pular para o site
                </button>
              </div>
            </div>
          )}

          {/* State 2: Analyzing Loader */}
          {isAnalyzing && (
            <div className="py-8 px-2 text-center animate-fadeIn">
              <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {/* Rotating outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C5A059]/70 animate-spin" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#5A5A40] p-[2px] flex items-center justify-center shadow-lg">
                  <img 
                    src={EXPERT_DATA.images.bust} 
                    alt={EXPERT_DATA.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 font-serif flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
                Analisando Perfil...
              </h3>
              <p className="text-xs text-[#E2C992] font-medium mb-5 min-h-[32px] flex items-center justify-center px-2">
                {analysisStatusText}
              </p>

              {/* Custom Animated Analyzing Progress Bar */}
              <div className="w-full max-w-[260px] mx-auto mb-3">
                <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-400 mb-1">
                  <span>Processando respostas</span>
                  <span className="text-[#C5A059] font-bold">{analysisProgress}%</span>
                </div>
                <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden p-[1px] border border-[#C5A059]/30">
                  <div 
                    className="h-full bg-gradient-to-r from-[#C5A059] via-[#E2C992] to-[#C5A059] rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(197,160,89,0.6)]"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
              </div>

              <p className="text-[10px] text-zinc-400 flex items-center justify-center gap-1 mt-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                Análise confidencial de Suelen Belini
              </p>
            </div>
          )}

          {/* State 3: Quiz Result View */}
          {isCompleted && (
            <QuizResultView 
              answers={answers}
              onGoToSite={onGoToSite}
              onClose={onClose}
            />
          )}

        </div>

        {/* iPhone Home Indicator Bottom Bar */}
        <div className="pt-1 pb-2 bg-[#121212] shrink-0">
          <div className="w-28 h-1 bg-white/20 rounded-full mx-auto" />
        </div>

      </div>
    </div>
  );
};

