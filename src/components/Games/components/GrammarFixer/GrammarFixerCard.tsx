import React from "react";
import { GrammarFixerQuestion } from "../../types/quiz";

interface GrammarFixerCardProps {
  question: GrammarFixerQuestion;
  selectedWordIndex: number | null;
  onSelectWord: (index: number) => void;
  isLocked: boolean;
}

const GrammarFixerCard: React.FC<GrammarFixerCardProps> = ({
  question,
  selectedWordIndex,
  onSelectWord,
  isLocked,
}) => {
  const words = question.sentence.split(" ");

  const handleClick = (index: number) => {
    if (isLocked) return;
    onSelectWord(index);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="text-muted mb-2">
          Tap the word that is grammatically incorrect:
        </p>

        {/* Sentence as clickable words */}
        <div className="mb-3">
          {words.map((word, index) => {
            const isSelected = selectedWordIndex === index;

            const baseClass = "btn btn-sm me-1 mb-2";
            const btnClass = isSelected
              ? `${baseClass} btn-primary`
              : `${baseClass} btn-outline-secondary`;

            return (
              <button
                key={`${word}-${index}`}
                type="button"
                className={btnClass}
                onClick={() => handleClick(index)}
                disabled={isLocked}
              >
                {word}
              </button>
            );
          })}
        </div>

        <p className="text-muted small mb-0">
          Tip: Read the sentence slowly and think about subject–verb agreement, tense, or prepositions.
        </p>
      </div>
    </div>
  );
};

export default GrammarFixerCard;
