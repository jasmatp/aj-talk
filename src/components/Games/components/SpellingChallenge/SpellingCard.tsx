import React, { FormEvent } from "react";
import { SpellingQuestion } from "../../types/quiz";

interface SpellingCardProps {
  question: SpellingQuestion;
  userAnswer: string;
  onAnswerChange: (value: string) => void;
  isLocked: boolean;
  onPlay: () => void;
  isSpeaking: boolean;
  supported: boolean;
  onSubmit: (e: FormEvent) => void;
}

const SpellingCard: React.FC<SpellingCardProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  isLocked,
  onPlay,
  isSpeaking,
  supported,
  onSubmit,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Audio row */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0 text-muted">Listen and type the word:</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={onPlay}
            disabled={!supported}
          >
            {isSpeaking ? "Playing..." : "🔊 Play"}
          </button>
        </div>

        <p className="mb-1 text-muted">Meaning / Hint:</p>
        <h5 className="card-title mb-3">{question.meaning}</h5>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="spellingInput" className="form-label">
              Type the correct spelling:
            </label>
            <input
              id="spellingInput"
              type="text"
              className="form-control"
              value={userAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              disabled={isLocked}
              autoComplete="off"
            />
            <div className="form-text">
              Capital letters don&apos;t matter, only spelling.
            </div>
          </div>
        </form>

        {!supported && (
          <p className="text-danger small mb-0">
            ⚠️ Speech synthesis is not supported in this browser.
          </p>
        )}
      </div>
    </div>
  );
};

export default SpellingCard;
