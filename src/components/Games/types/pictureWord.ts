import { Level } from "./quiz";

export interface PictureWordQuestion {
  id: number;
  word: string;            // correct word (e.g. "CAT")
  imageUrl: string;        // image to show
  letters: string[];       // pool of letters to choose from
  hintGujarati: string;    // Gujarati word
   level: Level;
}
