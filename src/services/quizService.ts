// src/services/quizService.ts
import { Question } from "../models/Question";

export const sampleQuestions: Question[] = [
  {
    questionText: "What is the capital of France?",
    answers: [
      { text: "Berlin", isCorrect: false},
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote 'Hamlet'?",
    answers: [
      { text: "Charles Dickens", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Mark Twain", isCorrect: false },
      { text: "Jane Austen", isCorrect: false },
    ],
  },
  {
    questionText: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
      { text: "Mercury", isCorrect: true },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    questionText: "What is the chemical symbol for water?",
    answers: [
      { text: "HO", isCorrect: false },
      { text: "H2O", isCorrect: true },
      { text: "O2", isCorrect: false },
      { text: "H2", isCorrect: false },
    ],
  },
  {
    questionText: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Claude Monet", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital city of Japan?",
    answers: [
      { text: "Seoul", isCorrect: false },
      { text: "Beijing", isCorrect: false },
      { text: "Bangkok", isCorrect: false },
      { text: "Tokyo", isCorrect: true },
    ],
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", isCorrect: false },
      { text: "Iron", isCorrect: false },
      { text: "Diamond", isCorrect: true },
      { text: "Platinum", isCorrect: false },
    ],
  },
  {
    questionText: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false },
    ],
  },
  {
    questionText: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Great White Shark", isCorrect: false },
      { text: "Giraffe", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", isCorrect: false },
      { text: "Cucumber", isCorrect: false },
      { text: "Avocado", isCorrect: true },
      { text: "Pepper", isCorrect: false },
    ],
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Silver", isCorrect: false },
      { text: "Helium", isCorrect: false },
    ],
  },
  {
    questionText: "In which continent is the Amazon Rainforest located?",
    answers: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: true },
      { text: "Australia", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of Italy?",
    answers: [
      { text: "Milan", isCorrect: false },
      { text: "Naples", isCorrect: false },
      { text: "Rome", isCorrect: true },
      { text: "Venice", isCorrect: false },
    ],
  },
  {
    questionText: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Hydrogen", isCorrect: false },
    ],
  },
  {
    questionText: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", isCorrect: false },
      { text: "Liver", isCorrect: false },
      { text: "Skin", isCorrect: true },
      { text: "Lungs", isCorrect: false },
    ],
  },
  {
    questionText: "Who is known as the father of computers?",
    answers: [
      { text: "Alan Turing", isCorrect: false },
      { text: "Charles Babbage", isCorrect: true },
      { text: "Bill Gates", isCorrect: false },
      { text: "Steve Jobs", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet has the most moons?",
    answers: [
      { text: "Mars", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Uranus", isCorrect: false },
    ],
  },
  {
    questionText: "Which country is the largest by land area?",
    answers: [
      { text: "Canada", isCorrect: false },
      { text: "China", isCorrect: false },
      { text: "United States", isCorrect: false },
      { text: "Russia", isCorrect: true },
    ],
  },
  {
    questionText: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", isCorrect: false },
      { text: "Nile River", isCorrect: true },
      { text: "Yangtze River", isCorrect: false },
      { text: "Mississippi River", isCorrect: false },
    ],
  },
];

export const fetchQuestions = (): Promise<Question[]> => {
  // Simulate fetching from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleQuestions);
    }, 1000);
  });
};
