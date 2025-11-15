export interface LessonContent {
  title: string;
  detail1: string;
  example1: string[];
  detail2?: string;
  example2?: string[];
  titleGuj: string;
  detail1Guj: string;
  example1Guj: string[];
  detail2Guj?: string;
  example2Guj?: string[];
}

export interface LessonLink {
  id: string;
  title: string;
  url: string;
  content?: LessonContent;
}

export interface LessonCardProps {
  imageSrc: string;
  title: string;
  description: string;
  lessonUrl: string;
}

export interface HeaderSectionProps {
  description: string;
}

export interface Question  {
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export interface PracticeQuizProps {
  articles?: Question[];
  questions?: Question[];
};


export interface GrammarLesson {
  title: string;
  remember?: string[];
  rememberGuj?: string[];
  details1: string;
  details1Guj: string;
  example1: string[];
  details2?: string;
  details2Guj?: string;
  example2?: string[];
  details3?: string;
  details3Guj?: string;
  example3?: string[];
  details4?: string;
  details4Guj?: string;
  example4?: string[];
  details5?: string;
  details5Guj?: string;
  example5?: string[];
  details6?: string;
  details6Guj?: string;
  example6?: string[];
  details7?: string;
  details7Guj?: string;
  example7?: string[];
  details8?: string;
  details8Guj?: string;
  example8?: string[];
}