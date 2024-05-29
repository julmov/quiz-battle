// src/components/Result.tsx
import React from "react";

interface ResultProps {
  score: number;
  totalQuestions: number;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
    </div>
  );
};

export default Result;
