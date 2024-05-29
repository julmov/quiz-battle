import React, { useState, useEffect } from "react";
import { Question } from "../models/Question";

interface QuestionProps {
  question: Question;
  onAnswerSelected: (isCorrect: boolean) => void;
  onTimeUp: () => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  onAnswerSelected,
  onTimeUp,
}) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <>
      <h2 className="mt-[25px] mb-[25px]">{question.questionText}</h2>
      <div className="flex justify-center">
        <div className="timer">Time left: {timeLeft} seconds</div>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 grid-rows-2 gap-4 h-fit">
          {question.answers.map((answer, index) => (
            <li
              key={index}
              onClick={() => onAnswerSelected(answer.isCorrect)}
              className={`bg-gray-200 p-1 h-[100px] w-[250px] flex justify-center items-center rounded-lg ${
                answer.isCorrect
                  ? " active:bg-green-400"
                  : "  active:bg-red-400"
              }`}
            >
              {answer.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuestionComponent;
