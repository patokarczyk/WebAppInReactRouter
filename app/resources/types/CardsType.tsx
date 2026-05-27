export type Course = {
  title: string;
  text: string;
  language?: CourseLanguage[];
  level?: CourseLevel;
  icon: string;
  hreff?: string;
  fullText?: string[];
};

export enum CourseLevel {
  NEWBIE = "NEWBIE",
  JUNIOR = "JUNIOR",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  GURU = "GURU"
}

export enum CourseLanguage{
  HTML = "HTML",
  CSS = "CSS",
  JS = "JS",
  API = "API"
}