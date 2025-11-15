import { Question } from "../types/types";

export const practiceQuestions: Record<string, Question[]> = {
  Articles: [
    {
      question:
        "Which article is correct? ___ apple a day keeps the doctor away.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct article: I saw ___ elephant at the zoo.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Select the correct option: She is ___ best player in the team.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 2,
    },
    {
      question: "Fill in the blank: I want to buy ___ new car.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Choose the correct article: He is reading ___ interesting book.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 1,
    },
    {
      question: "Fill in the blank: ___ moon looks beautiful tonight.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 2,
    },
    {
      question: "Select the correct article: She has ___ cat and ___ dog.",
      options: ["A, a", "An, a", "A, the", "An, the"],
      correctAnswerIndex: 0,
    },
    {
      question: "Fill in the blank: I saw ___ eagle flying high.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct article: He wants to be ___ engineer.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 1,
    },
    {
      question: "Fill in the blank: She went to ___ school by bus.",
      options: ["A", "An", "The", "No article"],
      correctAnswerIndex: 2,
    },
  ],
  "POSSESSIVES: apostrophe('), apostrophe 's' ('s), of": [
    {
      question: "Choose the correct possessive form: This is ___ book.",
      options: ["the girl’s", "the girls", "the girls’", "the girl"],
      correctAnswerIndex: 0,
    },
    {
      question: "Select the correct sentence:",
      options: [
        "The ladies hat is new.",
        "The ladies’ hats are new.",
        "The lady’s hats are new.",
        "The lady hats are new.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct form to show ownership: This is ___ car.",
      options: ["the men’s", "the mens", "the man’s", "the men"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Select the correct possessive: The ___ shoes are on the floor.",
      options: ["childs", "children’s", "child’s", "childrens’"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct possessive for plural nouns ending in 's':",
      options: ["girls’", "girl’s", "girls", "girls’s"],
      correctAnswerIndex: 0,
    },
    {
      question: "Select the correct use of apostrophe:",
      options: [
        "The fathers boss is strict.",
        "The father’s boss is strict.",
        "The fathers’ boss is strict.",
        "The father boss is strict.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which is the correct possessive form for 'children'?",
      options: ["children’s", "childrens’", "child’s", "children"],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "The branches of the tree are green.",
        "The tree’s branches are green.",
        "Branches of the tree is green.",
        "The branches of tree is green.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Select the correct use of 'of' to show possession:",
      options: [
        "The roof of the house is leaking.",
        "The house of roof is leaking.",
        "The roof house is leaking.",
        "The roof’s house is leaking.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "The girls cousin is coming over.",
        "The girl’s cousin is coming over.",
        "The girls’ cousin is coming over.",
        "The girl cousin is coming over.",
      ],
      correctAnswerIndex: 2,
    },
  ],
};
