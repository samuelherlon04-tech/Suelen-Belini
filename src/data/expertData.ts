import { GalleryItem, QuizQuestion, TestimonialItem } from '../types';

export const EXPERT_DATA = {
  name: "Suelen Belini",
  title: "Especialista em Peeling Químico, Diástase & Remodelamento Corporal",
  shortTitle: "Peeling Químico, Diástase e Remodelamento Corporal",
  whatsappNumber: "554191683115",
  whatsappDisplay: "(41) 99168-3115",
  instagramUrl: "https://www.instagram.com/suelenesteticista/",
  instagramHandle: "@suelenesteticista",
  address: "Rua Voluntarios da Patria, 1269, sala 602, São José dos Pinhais - PR",
  city: "São José dos Pinhais",
  
  // Video presentation
  videoUrl: "https://i.imgur.com/DTcYJEu.mp4",
  videoEmbedUrl: "https://imgur.com/DTcYJEu",
  videoCopy: "descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.",

  // Primary expert images (working links with elegant fallback)
  images: {
    hero: "https://i.imgur.com/dDz9NaK.png",
    bust: "https://i.imgur.com/dDz9NaK.png",
    authority: "https://i.imgur.com/y93hJJ2.png",
    consultation: "https://i.imgur.com/y93hJJ2.png",
    profileFallback: "https://i.imgur.com/dDz9NaK.png",
  },

  // WhatsApp Message Generator
  getWhatsAppLink: (customMessage?: string) => {
    const base = "https://wa.me/554191683115";
    const defaultMsg = "Olá Suelen! Vi seu site e gostaria de agendar uma primeira avaliação exclusiva para conhecer seu método.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `${base}?text=${text}`;
  },

  // Pre-filled WhatsApp message with Quiz responses
  getQuizWhatsAppLink: (answers: { question: string; answer: string }[]) => {
    const base = "https://wa.me/554191683115";
    let message = `Olá Suelen! Acabei de fazer a sua Avaliação Personalizada no site e meu perfil deu COMPATÍVEL! ✨\n\n`;
    message += `Minhas respostas:\n`;
    answers.forEach((item, idx) => {
      message += `• *${item.question}*: ${item.answer}\n`;
    });
    message += `\nGostaria de saber os próximos passos para agendar minha consulta presencial com você!`;
    return `${base}?text=${encodeURIComponent(message)}`;
  }
};

// Quiz questions designed for maximum relevance and qualification
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo ou incômodo hoje?",
    subtitle: "Selecione o ponto que mais afeta sua autoestima ou bem-estar:",
    options: [
      { label: "Manchas, Melasma ou Textura Facial (Peeling Químico)", description: "Busco renovação da pele, uniformização e viço natural." },
      { label: "Recuperação do Abdômen e Fechamento de Diástase", description: "Sinto o abdômen estufado ou flácido pós-gestação/emagrecimento." },
      { label: "Remodelamento Corporal e Gordura Localizada", description: "Quero esculpir o contorno do meu corpo sem cirurgia invasiva." },
      { label: "Combinação Facial + Corporal Completa", description: "Desejo uma transformação harmoniosa em mais de uma área." }
    ]
  },
  {
    id: 2,
    question: "Como você prefere que seja o seu resultado final?",
    subtitle: "Para nós, entender a sua expectativa estética é fundamental:",
    options: [
      { label: "Extremamente Natural e Elegante", description: "Quero que as pessoas notem que estou mais bonita, sem parecer artificial." },
      { label: "Transformação Notável com Alta Definição", description: "Quero um impacto visual evidente e contornos bem desenhados." },
      { label: "Focado em Saúde Funcional e Autoestima", description: "Recuperar o conforto com meu corpo e voltar a usar as roupas que amo." }
    ]
  },
  {
    id: 3,
    question: "Já realizou algum procedimento estético anteriormente?",
    subtitle: "Saber do seu histórico nos ajuda a planejar a conduta mais segura:",
    options: [
      { label: "Nunca realizei nenhum procedimento", description: "Esta será a minha primeira vez e busco total segurança e acolhimento." },
      { label: "Sim, mas não obtive o resultado que desejava", description: "Procuro uma profissional que realmente personalize meu tratamento." },
      { label: "Sim, sou acostumada a cuidar de mim regularmente", description: "Prezo por tratamentos de alto padrão e profissionais experientes." }
    ]
  },
  {
    id: 4,
    question: "Quando você gostaria de iniciar o seu protocolo exclusivo?",
    subtitle: "Nosso atendimento é individual e com vagas limitadas por semana:",
    options: [
      { label: "O quanto antes (Nesta semana / Próximos dias)", description: "Estou pronta para agendar e dar o primeiro passo agora." },
      { label: "Nas próximas 2 a 3 semanas", description: "Quero me programar e garantir meu horário com antecedência." },
      { label: "Ainda estou pesquisando, mas quero conhecer a proposta", description: "Gostaria de entender melhor como funciona a primeira avaliação." }
    ]
  }
];

// Gallery: PROVAS SOCIAIS / RESULTADOS REAIS (Antes e Depois)
// Ready for user to easily paste more links!
export const REAL_RESULTS_GALLERY: GalleryItem[] = [
  {
    id: "res-1",
    url: "https://i.imgur.com/AbVgZYd.png",
    title: "Tratamento de Pele & Peeling Especializado",
    tag: "Peeling Químico",
    description: "Uniformização de tom, renovação da textura dérmica e redução expressiva de manchas com viço natural."
  },
  {
    id: "res-2",
    url: "https://i.imgur.com/atQRzFj.png",
    title: "Recuperação Abdominal & Diástase",
    tag: "Diástase",
    description: "Trabalho específico de aproximação muscular e reposicionamento das estruturas abdominais."
  },
  {
    id: "res-3",
    url: "https://i.imgur.com/qgOxeRl.png",
    title: "Remodelamento Corporal Avançado",
    tag: "Remodelamento",
    description: "Redução de medidas, esculpimento do contorno da cintura e melhora da firmeza cutânea."
  },
  {
    id: "res-4",
    url: "https://i.imgur.com/sUsqjGf.png",
    title: "Resultado Personalizado Método Suelen Belini",
    tag: "Protocolo Exclusivo",
    description: "Harmonia corporal conquistada com planejamento individual e tecnologia aplicada com sensibilidade."
  }
  // User can append more items here (5 to 36):
  // { id: "res-5", url: "", title: "", tag: "" },
];

// Gallery: HARMONIZAÇÃO DE 💚 (Provas, Bastidores & Depoimentos de Pacientes)
export const LOVE_HARMONIZATION_GALLERY: TestimonialItem[] = [
  {
    id: "love-1",
    url: "https://i.imgur.com/CTcbsjJ.png",
    patientName: "Paciente Exclusiva",
    treatment: "Peeling & Remodelamento",
    comment: "A atenção da Suelen em cada detalhe me fez sentir verdadeiramente segura. O resultado superou tudo o que imaginei!"
  },
  {
    id: "love-2",
    url: "https://i.imgur.com/BDKsnCi.png",
    patientName: "Paciente Exclusiva",
    treatment: "Tratamento de Diástase",
    comment: "Minha barriga voltou ao lugar depois de anos de desconforto. Não tem preço vestir uma roupa e se sentir linda de novo."
  },
  {
    id: "love-3",
    url: "https://i.imgur.com/BkRsIhN.png",
    patientName: "Paciente Exclusiva",
    treatment: "Protocolo Facial",
    comment: "Atendimento impecável! Nada de promessas mágicas, apenas ciência, carinho e um resultado que todo mundo elogia."
  }
  // User can append more items here:
  // { id: "love-4", url: "", patientName: "", comment: "" },
];

// Differential Cards: Por que confiar em mim
export const DIFFERENTIALS = [
  {
    icon: "ShieldCheck",
    title: "Atendimento 100% Exclusivo Comigo",
    description: "Você não é atendida por assistentes ou estagiárias. Do diagnóstico à aplicação de cada sessão, tudo é feito diretamente por mim."
  },
  {
    icon: "Eye",
    title: "Avaliação Honesta e Transparente",
    description: "Se um procedimento não for indicado para sua pele ou corpo, eu serei a primeira a te dizer com total clareza e ética."
  },
  {
    icon: "Sparkles",
    title: "Naturalidade Sem Exageros",
    description: "Meu compromisso é realçar a sua beleza autêntica, preservando sua identidade e anatomia com elegância e sofisticação."
  },
  {
    icon: "HeartPulse",
    title: "Ciência e Respeito à sua Fisiologia",
    description: "Tratamentos baseados em fisiologia tecidual real para regenerar, cicatrizar e remodelar de forma segura e duradoura."
  },
  {
    icon: "Award",
    title: "Ambiente Privativo e Acolhedor",
    description: "Espaço projetado para o seu conforto absoluto, sem pressa, com escuta atenta e privacidade total em cada encontro."
  },
  {
    icon: "Smile",
    title: "Acompanhamento Contínuo",
    description: "Você tem canal direto para tirar dúvidas em qualquer fase do seu protocolo, com suporte próximo e carinhoso."
  }
];

// 3 Steps: Como Funciona a Primeira Consulta
export const CONSULTATION_STEPS = [
  {
    step: "01",
    title: "Contato Inicial no WhatsApp",
    subtitle: "Simples, rápido e sem burocracias",
    description: "Ao clicar no botão, você conversa diretamente com nossa equipe ou comigo para tirar dúvidas iniciais e escolher o melhor dia e horário."
  },
  {
    step: "02",
    title: "Avaliação Presencial Individual",
    subtitle: "Diagnóstico profundo e personalizado",
    description: "Em nosso consultório, analisamos sua queixa com lupa, histórico clínico e objetivos, traçando um plano sob medida para você."
  },
  {
    step: "03",
    title: "Início do Seu Protocolo Sob Medida",
    subtitle: "Resultados progressivos e seguros",
    description: "Com total clareza do investimento, sessões e cuidados em casa, iniciamos seu tratamento com foco em transformação natural."
  }
];
