// src/App.tsx
import React from "react";
import Quiz from "../components/Quiz";
import "../App.css";
import "../styles/QuizPage.css"

const QuizPage: React.FC = () => {
  return (
    <div className="App">
      <h1>Quiz Battle</h1>
      <Quiz />
    </div>
  );
};

export default QuizPage;
