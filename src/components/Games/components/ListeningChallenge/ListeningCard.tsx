import React from "react";
import { ListeningQuestion } from "../../types/quiz";

interface ListeningCardProps {
  question: ListeningQuestion;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isLocked: boolean;
  onPlay: () => void;
  isSpeaking: boolean;
  supported: boolean;
}

const ListeningCard: React.FC<ListeningCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isLocked,
  onPlay,
  isSpeaking,
  supported,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Audio header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="mb-0 text-muted">Listen and choose the word:</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={onPlay}
            disabled={!supported}
          >
            {isSpeaking ? "Playing..." : "🔊 Play"}
          </button>
        </div>

        {/* Options */}
        <div className="list-group">
          {question.options.map((option) => {
            const isSelected = selectedOption === option;
            const isCorrectOption = option === question.correctWord;

            let classes = "list-group-item list-group-item-action";

            if (isLocked) {
              if (isCorrectOption) {
                classes += " list-group-item-success";
              } else if (isSelected && !isCorrectOption) {
                classes += " list-group-item-danger";
              }
            } else if (isSelected) {
              classes += " active";
            }

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

        {!supported && (
          <p className="text-danger small mt-2 mb-0">
            ⚠️ Speech synthesis is not supported in this browser.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListeningCard;
