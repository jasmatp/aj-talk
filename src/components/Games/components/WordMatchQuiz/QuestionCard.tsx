import React from "react";
import { Question } from "../../types/quiz";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionIndex: number | null;
  onOptionClick: (optionIndex: number) => void;
  showAnswer: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionIndex,
  onOptionClick,
  showAnswer,
}) => {
  const getOptionButtonClass = (optionIndex: number): string => {
    if (!showAnswer) {
      return selectedOptionIndex === optionIndex
        ? "btn btn-outline-primary w-100"
        : "btn btn-outline-secondary w-100";
    }

    const isCorrect = optionIndex === question.correctIndex;
    const isSelected = optionIndex === selectedOptionIndex;

    if (isCorrect) return "btn btn-success w-100";
    if (isSelected && !isCorrect) return "btn btn-danger w-100";

    return "btn btn-outline-secondary w-100";
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <span className="badge bg-primary text-uppercase">
            {question.level}
          </span>
          <span className="badge bg-secondary">
            Question {currentIndex + 1} / {totalQuestions}
          </span>
        </div>

        <h5 className="card-title mb-1">
          What is the meaning of{" "}
          <span className="text-primary fw-bold">"{question.word}"</span>?
        </h5>

        {/* Gujarati meaning / hint */}
        <p className="text-muted small mb-3">
          Gujarati hint:{" "}
          <span className="fw-semibold">{question.gujaratiMeaning}</span>
        </p>

        <div className="row gy-2">
          {question.options.map((option, index) => (
            <div key={index} className="col-12 col-md-6">
              <button
                type="button"
                className={getOptionButtonClass(index)}
                onClick={() => onOptionClick(index)}
                disabled={showAnswer && selectedOptionIndex !== null}
              >
                {option}
              </button>
            </div>
          ))}
        </div>

        {showAnswer && selectedOptionIndex !== null && (
          <div className="mt-3">
            {selectedOptionIndex === question.correctIndex ? (
              <div className="alert alert-success mb-0">
                ✅ Correct! સરસ જવાબ આપ્યો.
              </div>
            ) : (
              <div className="alert alert-danger mb-0">
                ❌ Not quite. Correct answer is{" "}
                <strong>{question.options[question.correctIndex]}</strong>.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
