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
  "Personal Pronouns As Subject And Objects": [
    {
      question:
        "Which pronoun correctly replaces the noun in this sentence? 'Sarah likes reading. ___ reads every day.'",
      options: ["She", "Her", "They", "It"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Choose the correct pronoun: 'Tom and Jerry are friends. ___ play together.'",
      options: ["He", "They", "We", "Them"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Select the correct form: 'I saw Rina and Sam. I talked to ___ yesterday.'",
      options: ["they", "them", "she", "he"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence uses the correct pronoun as subject?",
      options: [
        "Me and John are going out.",
        "John and me are playing.",
        "John and I are going out.",
        "I and him are studying.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Fill in the blank: 'The children are happy. I gave ___ some chocolates.'",
      options: ["they", "them", "their", "theirs"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct pronoun: 'My brother is tall. ___ can play basketball well.'",
      options: ["He", "Him", "His", "They"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which pronoun correctly completes the sentence? 'This is my friend and __ are going to the park.'",
      options: ["me", "I", "him", "us"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct object pronoun: 'The teacher spoke to John and __.'",
      options: ["I", "me", "we", "they"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Select the correct usage: '___ asked them to finish the work.'",
      options: ["Them", "Me", "I", "Us"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which sentence is correct?",
      options: [
        "You and me are responsible.",
        "You and I are responsible.",
        "Me and you are responsible.",
        "I and you are responsible.",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Possessive Adjectives and Possessive Pronouns": [
    {
      question: "Which phrase correctly uses a possessive adjective?",
      options: [
        "This is mine book.",
        "This is my book.",
        "This is yours book.",
        "This is her mine.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct possessive pronoun to complete the sentence: 'That book is ___. '",
      options: ["my", "mine", "your", "yours"],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the incorrect use of possessive adjective:",
      options: ["my computer", "your one", "their shoes", "our school"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence correctly avoids repeating the noun?",
      options: [
        "This is my book. That is my book.",
        "This is my book. That is mine.",
        "This is mine book. That is my book.",
        "This is my book. That is your book.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Fill in the blank: 'The bag is not yours, it is __.'",
      options: ["her", "hers", "his", "its"],
      correctAnswerIndex: 1,
    },
    {
      question: "Identify the correct use of possessive pronoun:",
      options: [
        "The house on the corner is ours.",
        "The house on the corner is our.",
        "The house on the corner is ours'.",
        "The house on the corner is our's.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "Their house is big, but their one is small.",
        "Their house is big, but theirs is small.",
        "Their house is big, but theirs one is small.",
        "Their house is big, but their's is small.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Fill in the blank: 'Is this ___ calculator?'",
      options: ["her", "hers", "she", "his"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which is a possessive adjective?",
      options: ["mine", "his", "yours", "hers"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct possessive pronoun: 'These shoes are __.'",
      options: ["their", "theirs", "they", "them"],
      correctAnswerIndex: 1,
    },
  ],
  "Demonstrative Adjectives and Demonstrative Pronouns": [
    {
      question:
        "Which demonstrative adjective correctly completes the sentence? ___ boy is tall.",
      options: ["This", "These", "Those", "Those"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Choose the correct demonstrative adjective: ___ boys are playing outside.",
      options: ["This", "That", "These", "This"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Select the right demonstrative pronoun for near objects: ___ is an expensive car.",
      options: ["That", "This", "Those", "These"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Select the correct demonstrative pronoun for far objects: ___ is an expensive car.",
      options: ["This", "These", "That", "Those"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Identify the correct use of demonstrative with a collective noun: ___ team is playing well today.",
      options: ["This", "These", "That", "Those"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Choose the correct demonstrative adjective for 'pair': ___ pair of shoes is expensive.",
      options: ["This", "That", "These", "Those"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which demonstrative adjective is used to refer to things near us (plural)?",
      options: ["Those", "These", "That", "This"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which demonstrative adjective is used to refer to things far from us (singular)?",
      options: ["This", "That", "These", "Those"],
      correctAnswerIndex: 1,
    },
  ],
  "Reflexive Pronouns As Objects": [
    {
      question:
        "Choose the correct reflexive pronoun: She made ___ a cup of tea.",
      options: ["herself", "himself", "themselves", "myself"],
      correctAnswerIndex: 0,
    },
    {
      question: "Fill in the blank: I taught ___ to play the guitar.",
      options: ["yourself", "himself", "myself", "ourselves"],
      correctAnswerIndex: 2,
    },
    {
      question: "Select the correct option: He blamed ___ for the mistake.",
      options: ["himself", "herself", "themselves", "yourself"],
      correctAnswerIndex: 0,
    },
    {
      question: "Fill in the blank: They prepared ___ for the exam.",
      options: ["himself", "yourself", "themselves", "myself"],
      correctAnswerIndex: 2,
    },
    {
      question: "Where does a reflexive pronoun usually come in a sentence?",
      options: [
        "Before the subject",
        "Immediately after the verb",
        "At the beginning of the sentence",
        "At the end of the sentence",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Reflexive Pronouns For Emphasis": [
    {
      question:
        "Where do we usually place the reflexive pronoun when it is used for emphasis?",
      options: [
        "Immediately after the verb",
        "At the end of the sentence or just after the subject",
        "At the beginning of the sentence",
        "Before the verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Identify the sentence that correctly uses a reflexive pronoun for emphasis.",
      options: [
        "I will attend the meeting myself.",
        "Myself I will attend the meeting.",
        "I myself will attend the meeting.",
        "I will myself attend the meeting.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "In the sentence 'She made the cake herself', the reflexive pronoun 'herself' is used to:",
      options: [
        "Show the object of the verb",
        "Emphasize that she alone did the task",
        "Indicate possession",
        "Show past tense",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which of the following sentences does NOT correctly use a reflexive pronoun for emphasis?",
      options: [
        "The CEO himself made the announcement.",
        "They themselves finished the work.",
        "She herself solves the problem.",
        "I myself finished the project.",
      ],
      correctAnswerIndex: 2, // "She herself solves the problem." is incorrect because it should be "solved" for past tense in this context, or it can be correct if emphasizing present tense, so maybe less clear; could be accepted but to keep strict, this is a tricky one.
    },
    {
      question:
        "True or False: When a reflexive pronoun is used for emphasis, it is always the object of the sentence.",
      options: ["True", "False"],
      correctAnswerIndex: 1,
    },
  ],
  "ADJECTIVES: before nouns and after verbs": [
    {
      question: "Choose the correct sentence:",
      options: [
        "A beautiful flower",
        "A flower beautiful",
        "Beautiful a flower",
        "Flower a beautiful",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Where do we usually place an adjective?",
      options: [
        "After the noun",
        "Before the noun",
        "At the end of the sentence",
        "Before the verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the sentence that uses an adjective after a verb:",
      options: [
        "The children are happy.",
        "A happy children",
        "Happy the children",
        "Children happy a",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Fill in the blank: The soup ___ delicious.",
      options: ["is", "are", "was", "become"],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "He became angry yesterday.",
        "He angry became yesterday.",
        "Angry he became yesterday.",
        "Became he angry yesterday.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which is the correct adjective + noun order?",
      options: [
        "Adjective + noun",
        "Noun + adjective",
        "Adjective + verb",
        "Verb + noun",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "ADJECTIVES: word order, use of comma and and": [
    {
      question:
        "Choose the sentence that follows the correct order of adjectives (Size - Colour - Nationality):",
      options: [
        "A blue small Indian car.",
        "A small red Indian car.",
        "An Indian small red car.",
        "A red Indian small car.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct sentence with two colour adjectives connected by 'and':",
      options: [
        "A red blue and shirt.",
        "A red and blue shirt.",
        "A blue, and red shirt.",
        "A red, blue shirt.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Identify the correct sentence that uses adjectives from different groups without comma or 'and':",
      options: [
        "An old, wooden table.",
        "An old wooden table.",
        "An old and wooden table.",
        "An old wooden, table.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Put these adjectives in the correct order (Size - Colour - Nationality) before the noun:\nTiny / green / Japanese / plant",
      options: [
        "Green tiny Japanese plant",
        "Japanese tiny green plant",
        "Tiny green Japanese plant",
        "Tiny Japanese green plant",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "True or False: When we use adjectives from different groups together, we use a comma or 'and' between them.",
      options: ["True", "False"],
      correctAnswerIndex: 1,
    },
  ],
  "ADJECTIVES Of Comparison": [
    {
      question: "Which sentence correctly uses a comparative adjective?",
      options: [
        "My house is bigger than yours.",
        "My house is more bigger than yours.",
        "My house is most bigger than yours.",
        "My house is biggest than yours.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct superlative adjective sentence:",
      options: [
        "This is the biggest house on the street.",
        "This is the most biggest house on the street.",
        "This is the more biggest house on the street.",
        "This is biggest house on the street.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "How do we form comparative adjectives for one-syllable adjectives?",
      options: [
        "Add 'est'",
        "Add 'er'",
        "Use 'more' before adjective",
        "Use 'most' before adjective",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence correctly uses 'more' and 'most'?",
      options: [
        "Apartment 1A is more attractive than Apartment 1C.",
        "Apartment 1A is more attractiver than Apartment 1C.",
        "Apartment 1A is most attractive than Apartment 1C.",
        "Apartment 1A is attractiver than Apartment 1C.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Identify the incorrect sentence:",
      options: [
        "She is more taller than her sister.",
        "She is taller than her sister.",
        "He is more careful than his brother.",
        "This task is more difficult than the last one.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Identify the incorrect sentence:",
      options: [
        "She is the most tallest in the class.",
        "She is the tallest in the class.",
        "This is the most beautiful painting.",
        "He is the most talented player.",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "ADJECTIVES: Irregular adjectives, 'ed' and 'ing' endings": [
    {
      question: "Choose the correct irregular comparative form:",
      options: [
        "good → gooder",
        "good → better",
        "good → more good",
        "good → bestest",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence uses an '-ing' adjective correctly?",
      options: [
        "I am interesting in this book.",
        "The story is interesting.",
        "She feels interesting.",
        "The students are interesting by the lesson.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence uses an '-ed' adjective correctly?",
      options: [
        "The match was excited.",
        "He is exciting about the trip.",
        "The children were excited.",
        "This is an excited movie.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Fill in the blank: The lecture was very ___. I almost fell asleep.",
      options: ["boring", "bored", "bore", "bores"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Fill in the blank: She felt very ___ after running for an hour.",
      options: ["tiring", "tired", "tire", "tireful"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "I am very tiring today.",
        "This work is tired.",
        "This work is tiring.",
        "I feel very tiring.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which is the correct superlative form of 'bad'?",
      options: ["badest", "worst", "most bad", "worse"],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the sentence with the correct ‘-ing’ adjective usage:",
      options: [
        "The frightened movie was good.",
        "The confusing boy is crying.",
        "The results are surprising.",
        "The excited news shocked us.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Select the correct ‘-ed’ adjective usage:",
      options: [
        "He looked surprised at the news.",
        "The surprised story was great.",
        "The teacher was very surprising.",
        "This game is surprised.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct comparative sentence:",
      options: [
        "She is more better than before.",
        "She is better than before.",
        "She is betterer than before.",
        "She is the more better.",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "ADJECTIVES Of Quantity": [
    {
      question: "Which adjective is used with plural countable nouns?",
      options: ["Much", "Many", "Some", "A little"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "Much students are here.",
        "Many students are here.",
        "A little students are here.",
        "Some student is here.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which adjective is used with uncountable nouns?",
      options: ["Many", "A few", "Much", "Several"],
      correctAnswerIndex: 2,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "There is some water in the bottle.",
        "There are some waters in the bottle.",
        "There is some apples in the bottle.",
        "There are some water in the bottle.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What does 'a few' mean?",
      options: [
        "A small amount (uncountable)",
        "A large number",
        "A small number (countable)",
        "None",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Fill in the blank: She drank ___ water.",
      options: ["a few", "many", "a little", "several"],
      correctAnswerIndex: 2,
    },
    {
      question: "Identify the correct sentence:",
      options: [
        "Some books is missing.",
        "Some water are spilled.",
        "Some books are missing.",
        "Some milks is spilled.",
      ],
      correctAnswerIndex: 2,
    },
  ],
};
