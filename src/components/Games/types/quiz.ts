export type Level = "beginner" | "intermediate" | "advanced";

export interface Question {
  id: number;
  word: string;
  options: string[];
  correctIndex: number;
  level: Level;
  gujaratiMeaning: string;
}