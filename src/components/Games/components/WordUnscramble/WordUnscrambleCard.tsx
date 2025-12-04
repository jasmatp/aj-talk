import React, { FormEvent } from "react";

interface WordUnscrambleCardProps {
  scrambled: string;
  clue: string;
  wordLength: number;
  userAnswer: string;
  onAnswerChange: (value: string) => void;
  isLocked: boolean;
  onSubmit: (e: FormEvent) => void;
}

const WordUnscrambleCard: React.FC<WordUnscrambleCardProps> = ({
  scrambled,
  clue,
  wordLength,
  userAnswer,
  onAnswerChange,
  isLocked,
  onSubmit,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="mb-1 text-muted">Unscramble this word:</p>
        <h3 className="mb-2 text-center">
          {scrambled.split("").join(" ")}
        </h3>

        <p className="mb-1 text-muted">Hint:</p>
        <p className="fw-semibold">{clue}</p>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="unscrambleInput" className="form-label">
              Type the correct word ({wordLength} letters):
            </label>
            <input
              id="unscrambleInput"
              type="text"
              className="form-control"
              value={userAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              disabled={isLocked}
              autoComplete="off"
            />
          </div>
        </form>

        <p className="text-muted small mb-0">
          Tip: Say the letters aloud while rearranging them in your mind.
        </p>
      </div>
    </div>
  );
};

export default WordUnscrambleCard;
