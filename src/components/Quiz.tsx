import React, { useState } from "react";
import { Question } from "../models/Question";
import { sampleQuestions } from "../services/quizService";
import QuestionComponent from "./Question";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelected = (isCorrect: boolean) => {
    // Handle answer selection (e.g., scoring)
    moveToNextQuestion();
  };

  const handleTimeUp = () => {
    // Handle time up (e.g., move to next question)
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz finished");
      // Handle quiz completion (e.g., show results)
    }
  };

  return (
    <div className="quiz">
      <QuestionComponent
        question={sampleQuestions[currentQuestionIndex]}
        onAnswerSelected={handleAnswerSelected}
        onTimeUp={handleTimeUp}
      />
    </div>
  );
};

export default Quiz;
