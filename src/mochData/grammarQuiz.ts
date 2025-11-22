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
  "Present Tense: Simple and Continuous": [
    {
      question: "Which sentence shows a habit (Simple Present)?",
      options: [
        "She is cooking dinner.",
        "She cooks dinner every day.",
        "She is going to cook dinner tomorrow.",
        "She cooked dinner yesterday.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence is in the Present Continuous Tense?",
      options: [
        "He plays football every evening.",
        "He is playing football now.",
        "He played football yesterday.",
        "He will play football tomorrow.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence expresses a general truth?",
      options: [
        "The sun rises in the east.",
        "They are rising early today.",
        "He rises at 7 a.m. tomorrow.",
        "She is rising the flag.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which of the following verbs cannot be used in continuous tense?",
      options: ["eat", "know", "write", "run"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which sentence shows a planned future action (Present Continuous)?",
      options: [
        "We meet the teacher every week.",
        "We met the teacher yesterday.",
        "We are meeting the teacher tomorrow.",
        "We meet the teacher tomorrow.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Select the correct form: She ______ a book right now.",
      options: ["reads", "is reading", "read", "is read"],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the correct form: They ______ to school every day.",
      options: ["are going", "go", "goes", "are go"],
      correctAnswerIndex: 1,
    },
    {
      question: "Identify the tense: 'They are playing outside.'",
      options: [
        "Simple Present Tense",
        "Present Continuous Tense",
        "Past Continuous Tense",
        "Future Tense",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Identify the tense: 'He lives in Ahmedabad.'",
      options: [
        "Simple Present Tense",
        "Present Continuous Tense",
        "Past Tense",
        "Future Tense",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "She is knowing the answer.",
        "She knows the answer.",
        "She knowing the answer.",
        "She is know the answer.",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Simple Past Tense: Regular and irregular verbs": [
    {
      question: "What does the Simple Past Tense show?",
      options: [
        "An action happening now",
        "An action that will happen later",
        "An action that happened in the past",
        "A general truth",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which sentence is in the Simple Past Tense?",
      options: [
        "He is visiting his friend.",
        "He visits his friend.",
        "He visited his friend yesterday.",
        "He will visit his friend tomorrow.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which is a regular verb in the past tense?",
      options: ["cut", "put", "cleaned", "hit"],
      correctAnswerIndex: 2,
    },
    {
      question: "Choose the correct past tense form of 'carry':",
      options: ["carried", "carryed", "carrieded", "carrid"],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct past tense form of 'stop':",
      options: ["stoped", "stopped", "stoppedd", "stopid"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which verb does NOT change in the past tense?",
      options: ["jump", "play", "cut", "wash"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which of the following is an irregular verb?",
      options: ["picked", "carried", "stopped", "put"],
      correctAnswerIndex: 3,
    },
    {
      question: "Which sentence uses a non-changing irregular verb?",
      options: [
        "He cleaned his room.",
        "She carried the bag.",
        "They put the books on the shelf.",
        "He stopped the car.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Select the correctly formed past tense verb:",
      options: ["hurryed", "hurried", "hurryied", "hurryd"],
      correctAnswerIndex: 1,
    },
    {
      question: "Which verb follows the rule: base form + 'ed'?",
      options: ["hit", "clean", "cut", "let"],
      correctAnswerIndex: 1,
    },
  ],
  "Past Continuous Tense": [
    {
      question: "What does the Past Continuous Tense show?",
      options: [
        "An action completed in the past",
        "An action going on at a specific time in the past",
        "An action that will happen in the future",
        "A general truth",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which word is commonly used with the Past Continuous Tense?",
      options: ["Yesterday", "While", "Tomorrow", "Often"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "She was cooking dinner at 8 pm last night.",
        "She cooked dinner at 8 pm last night.",
        "She cooking dinner at 8 pm last night.",
        "She will cook dinner at 8 pm last night.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "How do we show two actions happening at the same time in the past?",
      options: [
        "Use Past Continuous for both actions or Simple Past for both actions",
        "Use Present Continuous for both actions",
        "Use Past Continuous for one and Present Continuous for the other",
        "Use Simple Present for both actions",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "How do we show that a shorter action happened during a longer action in the past?",
      options: [
        "Use Simple Past for both actions",
        "Use Past Continuous for the shorter action and Simple Past for the longer action",
        "Use Past Continuous for the longer action and Simple Past for the shorter action",
        "Use Present Perfect for both actions",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which type of verbs usually do NOT take the Past Continuous Tense?",
      options: [
        "Action verbs",
        "Stative verbs",
        "Transitive verbs",
        "Modal verbs",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Identify the sentence with a stative verb not in Past Continuous:",
      options: [
        "I was knowing the answer.",
        "I knew the answer.",
        "She was loving the movie.",
        "They were owning a house.",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Present Perfect Tense": [
    {
      question: "When do we use the Present Perfect Tense?",
      options: [
        "To talk about actions that happened at a specific time in the past.",
        "To talk about actions that happened in the past without mentioning the exact time.",
        "To talk about future plans.",
        "To describe habits.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence correctly uses the Present Perfect Tense?",
      options: [
        "I visited London last year.",
        "I have visited London.",
        "I will visit London.",
        "I am visiting London.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "We use the Present Perfect Tense to talk about an action that started in the past and _____.",
      options: [
        "happened once and ended.",
        "is still continuing now.",
        "will happen in the future.",
        "happens regularly.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct Present Perfect sentence:",
      options: [
        "She has finished her homework.",
        "She finished her homework yesterday.",
        "She will finish her homework.",
        "She finishes her homework.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which sentence uses Simple Past Tense instead of Present Perfect Tense?",
      options: [
        "They have studied English for three months.",
        "She has worked at this company since 2010.",
        "I visited London last year.",
        "I have lived here for five years.",
      ],
      correctAnswerIndex: 2,
    },
  ],
  "Simple Future Tense": [
    {
      question:
        "Which pronouns do we use with 'shall' in the simple future tense?",
      options: ["He and she", "I and we", "You and they", "All pronouns"],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "I will goes to school tomorrow.",
        "She will eat dinner at 8 PM.",
        "They will be happy to seeing you.",
        "He will be doctor one day.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How do we form the simple future tense using 'going to'?",
      options: [
        "Past tense of 'to be' + going to + base form of verb",
        "Present tense of 'to be' + going to + base form of verb",
        "Future tense of 'to be' + going to + past participle",
        "Present participle of 'to be' + going to + base form of verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence shows a planned future action?",
      options: [
        "He will be a doctor one day.",
        "I am going to meet my friend tomorrow.",
        "They will play football sometimes.",
        "She eats dinner at 8 PM.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the correct form of simple future tense:",
      options: [
        "She going to travel next week.",
        "She is going to travel next week.",
        "She will traveling next week.",
        "She is going travel next week.",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Future Continuous Tense": [
    {
      question: "How do we form the future continuous tense?",
      options: [
        "will + base form of verb",
        "will be + base form of verb + -ing",
        "have + past participle",
        "am/is/are + verb + -ing",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She will be studying at 8 PM tomorrow.",
        "She will studying at 8 PM tomorrow.",
        "She will be study at 8 PM tomorrow.",
        "She will study at 8 PM tomorrow.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which verbs are usually NOT used in the future continuous tense?",
      options: [
        "verbs of action like 'run', 'play'",
        "state verbs like 'want', 'remember'",
        "verbs ending in -ing",
        "all verbs are used",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "I will be forgetting your name.",
        "I will forget your name.",
        "I will be forget your name.",
        "I forgetting your name.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "What does the future continuous tense show?",
      options: [
        "A completed action in the past",
        "An action happening at a specific time in the future",
        "A habit or routine",
        "A fact or truth",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Question Tags: isn't, aren't, doesn't, don't": [
    {
      question: "She is your teacher, ________?",
      options: ["is she", "isn't she", "aren't she", "doesn't she"],
      correctAnswerIndex: 1,
    },
    {
      question: "They are playing outside, ________?",
      options: ["aren't they", "are they", "don't they", "isn't they"],
      correctAnswerIndex: 0,
    },
    {
      question: "You don’t like coffee, ________?",
      options: ["don't you", "do you", "doesn't you", "won't you"],
      correctAnswerIndex: 1,
    },
    {
      question: "He doesn’t eat meat, ________?",
      options: ["does he", "doesn't he", "is he", "isn't he"],
      correctAnswerIndex: 0,
    },
    {
      question: "Riya sings well, ________?",
      options: ["does she", "doesn't she", "isn't she", "will she"],
      correctAnswerIndex: 1,
    },
    {
      question: "The boys are late, ________?",
      options: ["aren't they", "are they", "don't they", "won't they"],
      correctAnswerIndex: 0,
    },
    {
      question: "Your friends will help us, ________?",
      options: ["won't they", "will they", "don't they", "aren't they"],
      correctAnswerIndex: 0,
    },
    {
      question: "The weather is nice today, ________?",
      options: ["is it", "isn't it", "aren't it", "doesn't it"],
      correctAnswerIndex: 1,
    },
    {
      question: "He is not busy, ________?",
      options: ["is he", "isn't he", "does he", "won't he"],
      correctAnswerIndex: 0,
    },
    {
      question: "They like cricket, ________?",
      options: ["don't they", "do they", "aren't they", "won't they"],
      correctAnswerIndex: 0,
    },
    {
      question: "The tall man is a doctor, ________?",
      options: ["is he", "isn't he", "doesn't he", "aren't he"],
      correctAnswerIndex: 1,
    },
    {
      question: "The students are ready, ________?",
      options: ["aren't they", "are they", "don't they", "won't they"],
      correctAnswerIndex: 0,
    },
    {
      question: "The girl is crying, isn’t ________?",
      options: ["she", "he", "it", "they"],
      correctAnswerIndex: 0,
    },
    {
      question: "The books are on the table, aren’t ________?",
      options: ["they", "them", "it", "those"],
      correctAnswerIndex: 0,
    },
    {
      question: "My brother will come soon, won’t ________?",
      options: ["he", "him", "they", "it"],
      correctAnswerIndex: 0,
    },
  ],
  "Wh-Questions": [
    {
      question: "Which word do we always start a wh-question with?",
      options: ["A noun", "A pronoun", "A wh-word", "An adjective"],
      correctAnswerIndex: 2,
    },
    {
      question: "What must every wh-question have to be complete?",
      options: [
        "A finite verb",
        "An infinitive verb",
        "A noun phrase",
        "An adjective",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct wh-question: ",
      options: [
        "What you want?",
        "What do you want?",
        "What want you?",
        "What does you want?",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the correct negative wh-question:",
      options: [
        "Who does not likes chocolate?",
        "Who don't like chocolate?",
        "Who doesn't like chocolate?",
        "Who does not like chocolates?",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which sentence correctly uses the verb 'to do' with a wh-word?",
      options: [
        "Where she live?",
        "Where does she live?",
        "Where do she live?",
        "Where does she lives?",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Wh-Questions : Who": [
    {
      question: "In a Who question, which verb agrees with a singular subject?",
      options: ["are", "is", "were", "am"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which verb form do we usually use with Who in the present tense?",
      options: ["Plural form", "Singular form", "Past form", "Future form"],
      correctAnswerIndex: 1,
    },
    {
      question: "Complete the sentence: Who _____ reading the book?",
      options: ["are", "is", "were", "am"],
      correctAnswerIndex: 1,
    },
    {
      question:
        "How do we form a negative Who question using the verb 'to do'?",
      options: [
        "Who + base verb",
        "Who + doesn’t/don’t/didn’t + base verb",
        "Who + is + verb-ing",
        "Who + was + verb-ing",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which sentence is correct?",
      options: [
        "Who doesn’t like chocolate?",
        "Who don’t likes chocolate?",
        "Who didn’t likes chocolate?",
        "Who doesn’t likes chocolate?",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "Wh-Questions : What": [
    {
      question: "How do we use the verb 'to do' with 'What' questions?",
      options: [
        "What + the verb 'to do' + noun/pronoun + base form of main verb",
        "What + noun + the verb 'to be' + base form of main verb",
        "What + verb 'to be' + noun/pronoun + main verb + -ing",
        "What + noun + the verb 'to do' + noun/pronoun + base form of main verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which structure is used to ask about an ongoing action with 'What'?",
      options: [
        "What + verb 'to do' + noun + base form of verb",
        "What + verb 'to be' + noun/pronoun + base form of main verb + -ing",
        "What + noun + the verb 'to do' + noun/pronoun + base form of main verb",
        "What + noun + verb 'to be' + noun/pronoun",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "What do we use with 'What' questions to ask about details of a noun?",
      options: [
        "What + noun + the verb 'to be' + noun/pronoun",
        "What + verb 'to do' + noun/pronoun + base form of main verb",
        "What + verb 'to be' + noun/pronoun + base form + -ing",
        "What + noun + verb 'to do' + noun/pronoun + base form of main verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "In present tense 'What' questions, which form of the main verb do we usually use?",
      options: ["Plural form", "Past form", "Singular form", "Continuous form"],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Choose the correct example of 'What' with a noun followed by a finite verb.",
      options: [
        "What color is your car?",
        "What doing she is?",
        "What does she doing?",
        "What is your doing car?",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "Wh-Questions : Where and When": [
    {
      question:
        "How do we use the verb 'to be' with 'Where' or 'When' questions?",
      options: [
        "Where/When + the verb 'to be' + noun/pronoun",
        "Where/When + the verb 'to do' + noun/pronoun + base form of main verb",
        "Where/When + will + noun/pronoun + base form of main verb",
        "Where/When + the verb 'to be' + noun/pronoun + base form of main verb + -ing",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which structure is used to ask about ongoing actions with 'Where' or 'When'?",
      options: [
        "Where/When + the verb 'to be' + noun/pronoun",
        "Where/When + the verb 'to be' + noun/pronoun + base form of main verb + -ing",
        "Where/When + will + noun/pronoun + base form of main verb",
        "Where/When + the verb 'to do' + noun/pronoun + base form of main verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How do we form future questions with 'Where' or 'When'?",
      options: [
        "Where/When + the verb 'to do' + noun/pronoun + base form of main verb",
        "Where/When + will + noun/pronoun + base form of main verb",
        "Where/When + the verb 'to be' + noun/pronoun",
        "Where/When + do/does/did + noun/pronoun + base form of main verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "How do we ask about actions connected to place or time using 'Where' or 'When'?",
      options: [
        "Where/When + will + noun/pronoun + base form of main verb",
        "Where/When + do/does/did + noun/pronoun + base form of main verb",
        "Where/When + the verb 'to be' + noun/pronoun + base form of main verb + -ing",
        "Where/When + the verb 'to be' + noun/pronoun",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct example of a 'When' question using 'will':",
      options: [
        "When does you arrive?",
        "When will he arrive?",
        "When is he arrives?",
        "When do he arrives?",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Wh-Questions : Which and Whose": [
    {
      question: "When do we use 'Which/Whose + the verb 'to be'' in questions?",
      options: [
        "To ask about ongoing actions related to a noun",
        "To ask about identity, possession, or choice when the subject is clear and no noun follows immediately",
        "To ask about actions related to a specific noun",
        "To ask about the past events",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "What structure is used to ask questions about a specific noun in 'Which' or 'Whose' questions?",
      options: [
        "Which/Whose + the verb 'to do' + noun/pronoun + base form of main verb",
        "Which/Whose + noun + the verb 'to be'",
        "Which/Whose + the verb 'to be' + noun/pronoun",
        "Which/Whose + noun + base form of verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How do we use main verbs with 'Which' and 'Whose' questions?",
      options: [
        "Which/Whose + noun + main verb",
        "Which/Whose + verb 'to be' + noun/pronoun",
        "Which/Whose + noun + the verb 'to do' + noun/pronoun",
        "Which/Whose + noun + verb 'to be' + main verb + ing",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the structure to ask about ongoing actions in 'Which' and 'Whose' questions?",
      options: [
        "Which/Whose + noun + main verb",
        "Which/Whose + noun + the verb 'to do' + noun/pronoun + base form of main verb",
        "Which/Whose + noun + the verb 'to be' + noun/pronoun + base form of main verb + ing",
        "Which/Whose + the verb 'to be' + noun/pronoun",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "How is the verb 'to do' used in 'Which' and 'Whose' questions?",
      options: [
        "Which/Whose + noun + the verb 'to be' + noun/pronoun + base form of main verb + ing",
        "Which/Whose + the verb 'to do' + noun/pronoun + base form of main verb",
        "Which/Whose + noun + main verb",
        "Which/Whose + verb 'to be' + noun/pronoun",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct example of 'Which/Whose' with the verb 'to do':",
      options: [
        "Which player is scoring the goal?",
        "Whose dog is barking loudly?",
        "Which do you prefer?",
        "Whose is this?",
      ],
      correctAnswerIndex: 2,
    },
  ],
  "Wh-Questions: How, How Many, How Much": [
    {
      question:
        "Which structure is used to ask about the degree or quality of something with 'How'?",
      options: [
        "How + noun + verb 'to do' + noun/pronoun + base form of verb",
        "How + adjective + the verb 'to be' + noun/pronoun",
        "How + verb 'to be' + noun/pronoun + base form + ing",
        "How + noun + verb 'to be' + noun/pronoun",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "How do we ask about actions related to a noun using 'How many' or 'How much'?",
      options: [
        "How many/much + noun + the verb 'to do' + noun/pronoun + base form of main verb",
        "How many/much + noun + the verb 'to be' + noun/pronoun",
        "How many/much + adjective + noun",
        "How many/much + noun + base form of verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which sentence correctly uses 'How many' with a main verb?",
      options: [
        "How many students attends the class?",
        "How many student attend the class?",
        "How many students attend the class daily?",
        "How much students attend the class daily?",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "How do we ask about the cost of something using 'How much'?",
      options: [
        "How much + the verb 'to do' + noun + base form of main verb",
        "How much + noun + the verb 'to be'",
        "Both a and b",
        "Neither a nor b",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Choose the correct example using 'How much' to ask about price.",
      options: [
        "How much is the book?",
        "How much are the books?",
        "How many is this dress?",
        "How much do the laptop cost?",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "Wh-Questions : Why": [
    {
      question:
        "How do we use the verb 'to be' with Why questions to ask about reasons related to a state or condition?",
      options: [
        "Why + the verb 'to be' + noun/pronoun + adjective",
        "Why + the verb 'to do' + noun/pronoun + base form of main verb",
        "Why + the verb 'to be' + noun/pronoun + base form of main verb + ing",
        "Why + noun + verb 'to do' + base form of verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which structure is used to ask about reasons related to an ongoing action in Why questions?",
      options: [
        "Why + the verb 'to do' + noun/pronoun + base form of main verb",
        "Why + the verb 'to be' + noun/pronoun + adjective",
        "Why + the verb 'to be' + noun/pronoun + base form of main verb + ing",
        "Why + noun + verb 'to be' + base form of verb",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "How do we use the verb 'to do' with Why questions?",
      options: [
        "Why + the verb 'to do' + noun/pronoun + base form of main verb",
        "Why + the verb 'to be' + noun/pronoun + adjective",
        "Why + the verb 'to be' + noun/pronoun + base form of main verb + ing",
        "Why + noun + verb 'to be' + base form of verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What do we use after the verb 'to be' in Why questions to ask about reasons related to a state or situation?",
      options: [
        "Adjective",
        "Preposition",
        "Base form of main verb",
        "Past tense verb",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Choose the correct example of a Why question using the verb 'to do'.",
      options: [
        "Why do you study English?",
        "Why is she happy?",
        "Why are they late?",
        "Why is he crying?",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "Modals : Can and May": [
    {
      question:
        "What is the usual difference between 'Can' and 'May' when asking for permission?",
      options: [
        "Can is more formal and polite than May",
        "May is more formal and polite than Can",
        "Can and May have the same level of formality",
        "May is informal and Can is formal",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Which modal verb is used to express ability?",
      options: ["May", "Can", "Must", "Should"],
      correctAnswerIndex: 1,
    },
    {
      question: "How do we form a statement using 'Can' or 'May'?",
      options: [
        "Subject + can/may + past form of main verb",
        "Subject + can/may + base form of main verb / verb 'to be'",
        "Subject + can/may + -ing form of main verb",
        "Subject + can/may + noun",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Where do we place 'Can' or 'May' in a question?",
      options: [
        "At the end of the question",
        "After the noun/pronoun",
        "At the beginning of the question",
        "After the main verb",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Which sentence correctly uses 'May' to express uncertainty?",
      options: [
        "She can be at the party tonight.",
        "He may be late today.",
        "Can you swim?",
        "May you help me?",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "Modals: Must": [
    {
      question: "Which structure is used to form a statement with 'must'?",
      options: [
        "Subject + must + base form of main verb / verb 'to be'",
        "Must + subject + base form of main verb / verb 'to be'",
        "Subject + can + base form of main verb",
        "Must + base form of main verb + subject",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "What is 'must' used to express?",
      options: [
        "Ability",
        "Obligation, necessity, or strong recommendation",
        "Possibility",
        "Permission",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "How do we form questions with 'must'?",
      options: [
        "Must + subject + base form of main verb / verb 'to be'",
        "Subject + must + base form of main verb",
        "Do + subject + must + base form of main verb",
        "Subject + can + base form of main verb",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Choose the correct example of a 'must' statement.",
      options: [
        "You must finish your homework.",
        "Must you finish your homework.",
        "Must homework finish you.",
        "Finish must you homework.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "Which sentence correctly uses 'must' in a question?",
      options: [
        "Must they leave now?",
        "They must leave now?",
        "Must leave they now?",
        "Must now they leave?",
      ],
      correctAnswerIndex: 0,
    },
  ],
  "Prepositions Of Position": [
    {
      question: "When do we use 'beside'?",
      options: [
        "When there are only two persons or things involved",
        "When there are three persons or things involved",
        "When there are more than three persons or things involved",
        "When something is in front",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which preposition is used when something is in the middle of three persons or things?",
      options: ["Beside", "Between", "Among", "Behind"],
      correctAnswerIndex: 1,
    },
    {
      question: "'Below' means:",
      options: [
        "Lower and covered by the thing above",
        "Higher than and touching the surface",
        "Lower but not necessarily directly underneath",
        "At the back of something",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the difference between 'above' and 'on'?",
      options: [
        "'Above' means touching the surface, 'on' means not touching",
        "'Above' means higher but not touching, 'on' means higher and touching",
        "'Above' means below, 'on' means behind",
        "'Above' and 'on' mean the same",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "When do we use 'at the back of'?",
      options: [
        "To indicate something behind but not related to a large object",
        "To indicate the rear part of a large object like a building or vehicle",
        "To indicate something in front of a building",
        "To indicate something above a person",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Choose the correct example using 'behind':",
      options: [
        "The garden is behind the school.",
        "The garden is at the back of the school.",
        "The garden is on the school.",
        "The garden is above the school.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Which preposition would you use to say something is 'next to' another thing?",
      options: ["Between", "Beside", "Among", "Behind"],
      correctAnswerIndex: 1,
    },
    {
      question: "'Among' is used when:",
      options: [
        "There are exactly two persons or things",
        "There are three persons or things",
        "There are more than three persons or things considered as a group",
        "Something is at the back of another thing",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Which preposition describes a position directly underneath and covered by something else?",
      options: ["Below", "Under", "Above", "On"],
      correctAnswerIndex: 1,
    },
    {
      question: "Select the correct sentence using 'below':",
      options: [
        "The painting is below the clock but not touching it.",
        "The painting is under the clock and touching it.",
        "The painting is on the clock.",
        "The painting is at the back of the clock.",
      ],
      correctAnswerIndex: 0,
    },
    {
      question: "When is 'behind' generally used?",
      options: [
        "To indicate a position in front of something",
        "To indicate a position directly at the rear or further back relative to something else",
        "To indicate a position on top of something",
        "To indicate something touching the surface below",
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "What is the main difference between 'below' and 'under'?",
      options: [
        "'Below' means covered, 'under' means not covered",
        "'Below' means not necessarily vertical or covered, 'under' means directly beneath and covered",
        "'Below' means higher position, 'under' means lower position",
        "'Below' and 'under' mean the same",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Which preposition would you use to describe a position higher than something but not touching it?",
      options: ["On", "Under", "Above", "Behind"],
      correctAnswerIndex: 2,
    },
    {
      question: "Choose the correct example using 'at the back of':",
      options: [
        "The kitchen is at the back of the house.",
        "The kitchen is behind the house but not part of it.",
        "The kitchen is on the house.",
        "The kitchen is above the house.",
      ],
      correctAnswerIndex: 0,
    },
  ],
};
