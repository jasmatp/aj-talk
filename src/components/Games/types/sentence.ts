import { Level } from "./quiz";

export interface SentenceQuestion {
  id: number;
  words: string[]; // correct order
  translationGujarati: string;
  hint: string; // e.g. "Present simple"
  level: Level;
}
