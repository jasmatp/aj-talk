export type Level = "beginner" | "intermediate" | "advanced";

export interface Question {
  id: number;
  word: string;
  options: string[];
  correctIndex: number;
  level: Level;
  gujaratiMeaning: string;
}

export interface SpellingQuestion {
id: number;
  meaning: string;         // hint / definition
  word: string;            // correct spelling
  exampleSentence?: string;
  level: Level;
  audioUrl?: string; 
}

export interface ListeningQuestion {
  id: number;
  correctWord: string;
  options: string[];          // multiple choices including correctWord
  exampleSentence?: string;
  level: Level;
}

export interface WordUnscrambleQuestion {
  id: number;
  level: Level;
  word: string;   // correct word
  clue: string;   // meaning / hint sentence
}

export interface GrammarFixerQuestion {
  id: number;
  level: Level;
  sentence: string;          // incorrect sentence
  incorrectWordIndex: number; // zero-based index of the wrong word
  correctWord: string;       // the correct word
  correctSentence: string;   // full corrected sentence
  explanation: string;       // short explanation for learner
}

export interface ClozeQuestion {
  id: number;
  level: Level;
  sentence: string;      // contains "___" as blank
  options: string[];     // e.g. ["is", "are", "am", "were"]
  correctOption: string; // the correct one from options
  explanation: string;   // short grammar/tenses explanation
}

export interface EmojiQuestion {
  id: number;
  level: Level;          // 'beginner' | 'intermediate' | 'advanced'
  emojis: string;        // e.g. "🔥 + 🐶"
  options: string[];     // e.g. ["Hot dog", "Angry dog", "Burning pet", "Hot animal"]
  correctOption: string; // must exist in options
  hint?: string;         // optional short hint
}

export interface Flashcard {
  id: number;
  level: Level; // 'beginner' | 'intermediate' | 'advanced'
  word: string;
  meaning: string;
  exampleSentence: string;
}

export type WordCategory = "noun" | "verb" | "adjective";

export interface WordSortingItem {
  id: string;          // unique per word (e.g. "apple-1")
  word: string;        // display text
  category: WordCategory; // correct category
}

export interface WordSortingSet {
  id: number;
  level: Level;
  words: WordSortingItem[];
}