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
  descriptionGuj: string;
}

export interface GrammarLesson {
  title: string;
  remember: string[];
  details1: string;
  example1: string[];
  details2?: string;
  example2?: string[];
  details3?: string;
  example3?: string[];
  details4?: string;
  example4?: string[];
  details5?: string;
  example5?: string[];
  details6?: string;
  example6?: string[];
  details7?: string;
  example7?: string[];
}
