export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    label: string;
    description?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface QuizAnswer {
  questionId: number;
  questionText: string;
  selectedOption: string;
}

export interface GalleryItem {
  id: string | number;
  url: string;
  title: string;
  tag?: string;
  description?: string;
}

export interface TestimonialItem {
  id: string | number;
  url: string;
  patientName?: string;
  comment?: string;
  treatment?: string;
}
