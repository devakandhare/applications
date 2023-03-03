import React, { useState } from "react";
import { questions } from "./questions";
import "./App.scss";

function App() {
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState(0);

  const handleQuestionAnswered = (theAnswer) => {
    setMarks((prevMarks) => (theAnswer.isCorrect ? prevMarks + 5 : prevMarks));
    setIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = index < questions.length ? questions[index] : null;
  return (
    <div className="app-container">
      {currentQuestion ? (
        <div className="quiz-container">
          <div className="question-container">
            <div className="header">
              Question {currentQuestion.id}/{questions.length}
            </div>
            <p className="question">{currentQuestion.question}</p>
          </div>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <div
                className="option"
                onClick={() => handleQuestionAnswered(option)}
              >
                {option.answerText}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div className="result">{marks}</div>
          <div className="result-text">
            {marks < 10 ? "Sorry You Failed." : "Congratulation You Passed!"}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
