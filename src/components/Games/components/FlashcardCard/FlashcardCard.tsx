import React from "react";
import { Flashcard } from "../../types/quiz";
import "./flashcard.css";

interface FlashcardCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onToggleFlip: () => void;
  onMarkKnown: () => void;
  onMarkLearnAgain: () => void;
}

const FlashcardCard: React.FC<FlashcardCardProps> = ({
  card,
  isFlipped,
  onToggleFlip,
  onMarkKnown,
  onMarkLearnAgain,
}) => {
  return (
    <div className="card shadow-sm" style={{ cursor: "pointer" }}>
      <div className="card-body text-center" onClick={onToggleFlip}>
        {!isFlipped ? (
          <>
            <div className="flashcard-side bg-light d-flex flex-column justify-content-center align-items-center">
              <p className="text-muted mb-2">Tap to see meaning</p>

              <div className="flashcard-word">{card.word}</div>
            </div>
          </>
        ) : (
          <>

            <div className="flashcard-side flashcard-back bg-white text-center">
              <p className="text-muted mb-1">Meaning:</p>
              <div className="flashcard-meaning-box">{card.meaning}</div>

              <p className="text-muted mb-1">Example:</p>
              <p className="flashcard-example">“{card.exampleSentence}”</p>

              {/* Buttons */}
              <div className="d-flex justify-content-between mt-3 px-3">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkLearnAgain();
                  }}
                >
                  Learn Again
                </button>

                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkKnown();
                  }}
                >
                  Known ✅
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlashcardCard;
