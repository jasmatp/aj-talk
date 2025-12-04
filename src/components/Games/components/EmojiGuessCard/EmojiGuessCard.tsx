import React from "react";
import { EmojiQuestion } from "../../types/quiz";

interface EmojiGuessCardProps {
  question: EmojiQuestion;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isLocked: boolean;
}

const EmojiGuessCard: React.FC<EmojiGuessCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isLocked,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <p className="mb-1 text-muted">Guess the correct phrase:</p>
        <div className="display-5 mb-3">{question.emojis}</div>

        {question.hint && (
          <p className="text-muted small mb-3">
            Hint: <span className="fw-semibold">{question.hint}</span>
          </p>
        )}

        <div className="list-group text-start">
          {question.options.map((option) => {
            const isSelected = selectedOption === option;
            const baseClass = "list-group-item list-group-item-action";
            const classes = isSelected
              ? `${baseClass} active`
              : baseClass;

            return (
              <button
                key={option}
                type="button"
                className={classes}
                onClick={() => onSelectOption(option)}
                disabled={isLocked}
              >
                {option}
              </button>
            );
          })}
        </div>

        <p className="text-muted small mt-2 mb-0">
          Tip: Think in English phrases, not single words.
        </p>
      </div>
    </div>
  );
};

export default EmojiGuessCard;
