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
