import { GrammarFixerQuestion } from "../types/quiz";

export const grammarFixerQuestions: GrammarFixerQuestion[] = [
  // ---------------------------- //
  //         BEGINNER (10)        //
  // ---------------------------- //
  {
    id: 1,
    level: "beginner",
    sentence: "He go to school every day.",
    incorrectWordIndex: 1, // "go"
    correctWord: "goes",
    correctSentence: "He goes to school every day.",
    explanation: "With 'he/she/it' in the present simple, use 'goes', not 'go'.",
  },
  {
    id: 2,
    level: "beginner",
    sentence: "She have a new phone.",
    incorrectWordIndex: 1, // "have"
    correctWord: "has",
    correctSentence: "She has a new phone.",
    explanation: "'She' takes 'has', not 'have', in the present simple.",
  },
  {
    id: 3,
    level: "beginner",
    sentence: "They is playing in the park.",
    incorrectWordIndex: 1, // "is"
    correctWord: "are",
    correctSentence: "They are playing in the park.",
    explanation: "Use 'are' with plural subject 'they'.",
  },
  {
    id: 4,
    level: "beginner",
    sentence: "I am agree with you.",
    incorrectWordIndex: 1, // "am"
    correctWord: "agree",
    correctSentence: "I agree with you.",
    explanation: "We say 'I agree', not 'I am agree'.",
  },
  {
    id: 5,
    level: "beginner",
    sentence: "She can sings very well.",
    incorrectWordIndex: 2, // "sings"
    correctWord: "sing",
    correctSentence: "She can sing very well.",
    explanation: "After modal verbs (can, will, must), use the base verb: 'sing'.",
  },
  {
    id: 6,
    level: "beginner",
    sentence: "My brother don't like tea.",
    incorrectWordIndex: 2, // "don't"
    correctWord: "doesn't",
    correctSentence: "My brother doesn't like tea.",
    explanation: "For 'he/she/it', use 'doesn't' instead of 'don't'.",
  },
  {
    id: 7,
    level: "beginner",
    sentence: "There is many cars on the road.",
    incorrectWordIndex: 1, // "is"
    correctWord: "are",
    correctSentence: "There are many cars on the road.",
    explanation: "Use 'are' with the plural noun 'cars'.",
  },
  {
    id: 8,
    level: "beginner",
    sentence: "He have two sisters.",
    incorrectWordIndex: 1, // "have"
    correctWord: "has",
    correctSentence: "He has two sisters.",
    explanation: "Use 'has' with 'he/she/it' in the present simple.",
  },
  {
    id: 9,
    level: "beginner",
    sentence: "This book are interesting.",
    incorrectWordIndex: 2, // "are"
    correctWord: "is",
    correctSentence: "This book is interesting.",
    explanation: "Use 'is' with singular subject 'book'.",
  },
  {
    id: 10,
    level: "beginner",
    sentence: "I didn't went to the party.",
    incorrectWordIndex: 2, // "went"
    correctWord: "go",
    correctSentence: "I didn't go to the party.",
    explanation: "After 'didn't', use the base verb: 'go'.",
  },

  // ---------------------------- //
  //      INTERMEDIATE (10)       //
  // ---------------------------- //
  {
    id: 11,
    level: "intermediate",
    sentence: "If it will rain, we will stay home.",
    incorrectWordIndex: 2, // "will"
    correctWord: "rains",
    correctSentence: "If it rains, we will stay home.",
    explanation: "In 'if' clauses (first conditional), use present simple: 'rains'.",
  },
  {
    id: 12,
    level: "intermediate",
    sentence: "She is married with a doctor.",
    incorrectWordIndex: 3, // "with"
    correctWord: "to",
    correctSentence: "She is married to a doctor.",
    explanation: "We say 'married to' someone, not 'married with'.",
  },
  {
    id: 13,
    level: "intermediate",
    sentence: "She is good in math.",
    incorrectWordIndex: 3, // "in"
    correctWord: "at",
    correctSentence: "She is good at math.",
    explanation: "Use 'good at' for skills and abilities.",
  },
  {
    id: 14,
    level: "intermediate",
    sentence: "I look forward to meet you.",
    incorrectWordIndex: 4, // "meet"
    correctWord: "meeting",
    correctSentence: "I look forward to meeting you.",
    explanation: "After 'look forward to', use a gerund: 'meeting'.",
  },
  {
    id: 15,
    level: "intermediate",
    sentence: "He didn't told me the truth.",
    incorrectWordIndex: 2, // "told"
    correctWord: "tell",
    correctSentence: "He didn't tell me the truth.",
    explanation: "After 'didn't', use base verb: 'tell'.",
  },
  {
    id: 16,
    level: "intermediate",
    sentence: "By the time we reached, the show has started.",
    incorrectWordIndex: 7, // "has"
    correctWord: "had",
    correctSentence: "By the time we reached, the show had started.",
    explanation: "Use past perfect ('had started') with 'by the time' in the past.",
  },
  {
    id: 17,
    level: "intermediate",
    sentence: "Neither of the answers are correct.",
    incorrectWordIndex: 4, // "are"
    correctWord: "is",
    correctSentence: "Neither of the answers is correct.",
    explanation: "'Neither of' is usually followed by a singular verb: 'is'.",
  },
  {
    id: 18,
    level: "intermediate",
    sentence: "He is boring in the class.",
    incorrectWordIndex: 2, // "boring"
    correctWord: "bored",
    correctSentence: "He is bored in the class.",
    explanation: "'Bored' describes how someone feels; 'boring' describes something.",
  },
  {
    id: 19,
    level: "intermediate",
    sentence: "The news are very surprising.",
    incorrectWordIndex: 2, // "are"
    correctWord: "is",
    correctSentence: "The news is very surprising.",
    explanation: "'News' is uncountable and takes a singular verb: 'is'.",
  },
  {
    id: 20,
    level: "intermediate",
    sentence: "Everyone have finished their work.",
    incorrectWordIndex: 1, // "have"
    correctWord: "has",
    correctSentence: "Everyone has finished their work.",
    explanation: "Indefinite pronouns like 'everyone' take a singular verb: 'has'.",
  },

  // ---------------------------- //
  //        ADVANCED (10)        //
  // ---------------------------- //
  {
    id: 21,
    level: "advanced",
    sentence: "The results of the experiment was surprising.",
    incorrectWordIndex: 5, // "was"
    correctWord: "were",
    correctSentence: "The results of the experiment were surprising.",
    explanation: "The subject 'results' is plural, so use 'were'.",
  },
  {
    id: 22,
    level: "advanced",
    sentence: "She strongly denied to have said that.",
    incorrectWordIndex: 3, // "to"
    correctWord: "having",
    correctSentence: "She strongly denied having said that.",
    explanation: "After 'deny', use a gerund: 'denied having done something'.",
  },
  {
    id: 23,
    level: "advanced",
    sentence: "It is high time you leave.",
    incorrectWordIndex: 5, // "leave"
    correctWord: "left",
    correctSentence: "It is high time you left.",
    explanation: "After 'It is high time', use a past tense form: 'left'.",
  },
  {
    id: 24,
    level: "advanced",
    sentence: "He is one of the student who always asks questions.",
    incorrectWordIndex: 5, // "student"
    correctWord: "students",
    correctSentence: "He is one of the students who always asks questions.",
    explanation: "Use plural 'students' after 'one of the'.",
  },
  {
    id: 25,
    level: "advanced",
    sentence: "Each of the players are responsible for the loss.",
    incorrectWordIndex: 4, // "are"
    correctWord: "is",
    correctSentence: "Each of the players is responsible for the loss.",
    explanation: "'Each of' takes a singular verb: 'is'.",
  },
  {
    id: 26,
    level: "advanced",
    sentence: "The committee have decided to postpone the meeting.",
    incorrectWordIndex: 2, // "have"
    correctWord: "has",
    correctSentence: "The committee has decided to postpone the meeting.",
    explanation: "Here 'committee' is treated as a single group, so use 'has'.",
  },
  {
    id: 27,
    level: "advanced",
    sentence: "The scenery of these mountains are beautiful.",
    incorrectWordIndex: 5, // "are"
    correctWord: "is",
    correctSentence: "The scenery of these mountains is beautiful.",
    explanation: "'Scenery' is uncountable, so use singular 'is'.",
  },
  {
    id: 28,
    level: "advanced",
    sentence: "Neither the manager nor the employees was informed.",
    incorrectWordIndex: 6, // "was"
    correctWord: "were",
    correctSentence: "Neither the manager nor the employees were informed.",
    explanation: "Verb agrees with the nearest subject 'employees' (plural): 'were'.",
  },
  {
    id: 29,
    level: "advanced",
    sentence: "The informations provided were useful.",
    incorrectWordIndex: 1, // "informations"
    correctWord: "information",
    correctSentence: "The information provided was useful.",
    explanation: "'Information' is uncountable; don’t use 'informations'.",
  },
  {
    id: 30,
    level: "advanced",
    sentence: "One of my friend is coming tomorrow.",
    incorrectWordIndex: 3, // "friend"
    correctWord: "friends",
    correctSentence: "One of my friends is coming tomorrow.",
    explanation: "After 'one of my', use a plural noun: 'friends'.",
  },
];
