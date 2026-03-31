export const lestningLession = [
  {
    title: "Basic Greetings",
    conversation: [
      { speaker: "Jem's", text: "Hello! How are you?" },
      { speaker: "Aaru", text: "I'm fine, thank you. And you?" },
      { speaker: "Jem's", text: "I'm good, thanks for asking." },
      { speaker: "Aaru", text: "What are you doing today?" },
      {
        speaker: "Jem's",
        text: "I am going to the market. Do you want to come?",
      },
    ],
    questionAnswers: [
      {
        question: "How does person B feel?",
        options: ["Happy", "Tired", "Angry", "Sad"],
        correctAnswerIndex: 0,
      },
      {
        question: "What is person A going to do today?",
        options: ["Study", "Go to the market", "Sleep", "Cook"],
        correctAnswerIndex: 1,
      },
      {
        question: "Does person A ask person B to join?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
      },
      {
        question: "How does person A respond to person B's greeting?",
        options: ["Angrily", "Gratefully", "Politely", "Indifferently"],
        correctAnswerIndex: 2,
      },
      {
        question: "Who initiates the conversation?",
        options: ["Person A", "Person B", "Both", "None"],
        correctAnswerIndex: 0,
      },
    ],
  },
  {
    title: "Shopping at the Store",
    conversation: [
      { speaker: "Shopkeeper", text: "Can I help you find something?" },
      { speaker: "Customer", text: "Yes, I need a gift for my friend." },
      { speaker: "Shopkeeper", text: "We have candles, books, and chocolates." },
      { speaker: "Customer", text: "I think she will like the chocolate box." },
      { speaker: "Shopkeeper", text: "Great choice. Would you like it gift wrapped?" },
    ],
    questionAnswers: [
      {
        question: "What is the customer looking for?",
        options: ["A toy", "A gift", "A snack", "A book"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which item does the shopkeeper suggest?",
        options: ["A scarf", "Chocolates", "A watch", "Shoes"],
        correctAnswerIndex: 1,
      },
      {
        question: "Does the customer want gift wrapping?",
        options: ["Yes", "No", "Maybe later", "Not mentioned"],
        correctAnswerIndex: 0,
      },
      {
        question: "Who offers help first?",
        options: ["Customer", "Shopkeeper", "Friend", "Manager"],
        correctAnswerIndex: 1,
      },
      {
        question: "What kind of gift does the customer choose?",
        options: ["Books", "Chocolates", "Candles", "Jewelry"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "At the Doctor's Office",
    conversation: [
      { speaker: "Doctor", text: "What brings you in today?" },
      { speaker: "Patient", text: "I have a sore throat and a headache." },
      { speaker: "Doctor", text: "Have you had a fever?" },
      { speaker: "Patient", text: "Yes, since last night." },
      { speaker: "Doctor", text: "I will check your temperature and prescribe medicine." },
    ],
    questionAnswers: [
      {
        question: "Why is the patient visiting the doctor?",
        options: ["For a checkup", "For a sore throat", "For a broken arm", "For a cough"],
        correctAnswerIndex: 1,
      },
      {
        question: "Since when has the patient had a fever?",
        options: ["This morning", "Since last night", "For a week", "Never"],
        correctAnswerIndex: 1,
      },
      {
        question: "What will the doctor do next?",
        options: ["Call a nurse", "Check temperature", "Give advice only", "Schedule surgery"],
        correctAnswerIndex: 1,
      },
      {
        question: "Which symptom does the patient mention?",
        options: ["Stomach ache", "Sore throat", "Back pain", "Earache"],
        correctAnswerIndex: 1,
      },
      {
        question: "What does the doctor plan to prescribe?",
        options: ["Vitamins", "Medicine", "A test", "Rest"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "Planning a Picnic",
    conversation: [
      { speaker: "Rina", text: "Would you like to go on a picnic this weekend?" },
      { speaker: "Tina", text: "Yes, that sounds fun. Where should we go?" },
      { speaker: "Rina", text: "The park by the lake is beautiful right now." },
      { speaker: "Tina", text: "I can bring sandwiches and juice." },
      { speaker: "Rina", text: "Perfect! I'll bring fruits and a blanket." },
    ],
    questionAnswers: [
      {
        question: "What are the friends planning?",
        options: ["A party", "A picnic", "A study session", "A movie night"],
        correctAnswerIndex: 1,
      },
      {
        question: "Where do they want to go?",
        options: ["The mall", "The beach", "The park", "The cinema"],
        correctAnswerIndex: 2,
      },
      {
        question: "What will Tina bring?",
        options: ["Fruits and blanket", "Sandwiches and juice", "Books", "Games"],
        correctAnswerIndex: 1,
      },
      {
        question: "Who suggests the park by the lake?",
        options: ["Tina", "Rina", "Both", "No one"],
        correctAnswerIndex: 1,
      },
      {
        question: "What does Rina offer to bring?",
        options: ["Sandwiches", "Blanket", "Camera", "Water"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "Asking for Directions",
    conversation: [
      { speaker: "Traveler", text: "Excuse me, can you tell me how to get to the museum?" },
      { speaker: "Local", text: "Sure. Walk two blocks and turn left at the bakery." },
      { speaker: "Traveler", text: "Is it far from here?" },
      { speaker: "Local", text: "No, it is only a five-minute walk." },
      { speaker: "Traveler", text: "Thank you very much for your help." },
    ],
    questionAnswers: [
      {
        question: "What place does the traveler want to find?",
        options: ["The museum", "The bank", "The park", "The station"],
        correctAnswerIndex: 0,
      },
      {
        question: "Where should the traveler turn?",
        options: ["Right", "Left", "Straight", "Back"],
        correctAnswerIndex: 1,
      },
      {
        question: "How long is the walk?",
        options: ["Fifteen minutes", "Five minutes", "Half an hour", "One minute"],
        correctAnswerIndex: 1,
      },
      {
        question: "Who gives the directions?",
        options: ["Another traveler", "A local person", "A police officer", "A tour guide"],
        correctAnswerIndex: 1,
      },
      {
        question: "What does the traveler say at the end?",
        options: ["Goodbye", "Thank you", "Sorry", "See you"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "Ordering Food",
    conversation: [
      { speaker: "Waiter", text: "Welcome! Are you ready to order?" },
      { speaker: "Customer", text: "Yes, I would like the pasta and a salad." },
      { speaker: "Waiter", text: "Would you like water or juice with that?" },
      { speaker: "Customer", text: "Water, please." },
      { speaker: "Waiter", text: "Your order will be ready soon." },
    ],
    questionAnswers: [
      {
        question: "What does the customer order?",
        options: ["Pizza and soup", "Pasta and salad", "Burger and fries", "Sandwich"],
        correctAnswerIndex: 1,
      },
      {
        question: "What drink does the customer choose?",
        options: ["Juice", "Water", "Soda", "Tea"],
        correctAnswerIndex: 1,
      },
      {
        question: "Who asks if the customer is ready?",
        options: ["Manager", "Chef", "Waiter", "Friend"],
        correctAnswerIndex: 2,
      },
      {
        question: "What will the waiter do next?",
        options: ["Take payment", "Prepare the order", "Bring dessert", "Clean the table"],
        correctAnswerIndex: 1,
      },
      {
        question: "Where does this conversation happen?",
        options: ["In a store", "At the bus stop", "In a restaurant", "At home"],
        correctAnswerIndex: 2,
      },
    ],
  },
];
