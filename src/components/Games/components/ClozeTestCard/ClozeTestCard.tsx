import React from "react";
import { ClozeQuestion } from "../../types/quiz";

interface ClozeTestCardProps {
  question: ClozeQuestion;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isLocked: boolean;
}

const ClozeTestCard: React.FC<ClozeTestCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isLocked,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="mb-1 text-muted">Choose the correct word:</p>
        <h5 className="mb-3">{question.sentence}</h5>

        <div className="list-group">
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
          Tip: Read the whole sentence and think about the tense and subject–verb agreement.
        </p>
      </div>
    </div>
  );
};

export default ClozeTestCard;
