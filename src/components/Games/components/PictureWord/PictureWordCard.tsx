import React, { useEffect, useState } from "react";
import { PictureWordQuestion } from "../../types/pictureWord";

interface PictureWordCardProps {
  question: PictureWordQuestion;
  onWordChange: (builtWord: string) => void;
  isLocked: boolean;
}

const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const PictureWordCard: React.FC<PictureWordCardProps> = ({
  question,
  onWordChange,
  isLocked,
}) => {
  const [lettersPool, setLettersPool] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  useEffect(() => {
    setLettersPool(shuffleArray(question.letters));
    setSelectedLetters([]);
    onWordChange("");
  }, [question, onWordChange]);

  const updateSelectedLetters = (next: string[]) => {
    setSelectedLetters(next);
    onWordChange(next.join(""));
  };

  const handleLetterClick = (index: number) => {
    if (isLocked) return;
    if (selectedLetters.length >= question.word.length) return;

    const next = [...selectedLetters, lettersPool[index]];
    updateSelectedLetters(next);
  };

  const handleBackspace = () => {
    if (isLocked) return;
    if (!selectedLetters.length) return;

    const next = selectedLetters.slice(0, selectedLetters.length - 1);
    updateSelectedLetters(next);
  };

  const handleClear = () => {
    if (isLocked) return;
    updateSelectedLetters([]);
  };

  const isComplete = selectedLetters.length === question.word.length;

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <div className="mb-3">
          <img
            src={question.imageUrl}
            alt={question.word}
            className="img-fluid"
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
        </div>

        {/* Selected letters */}
        <div className="d-flex justify-content-center gap-2 mb-3">
          {Array.from({ length: question.word.length }).map((_, index) => (
            <div
              key={index}
              className="border rounded px-3 py-2 fs-4 fw-bold"
              style={{ minWidth: "40px" }}
            >
              {selectedLetters[index] ?? ""}
            </div>
          ))}
        </div>

        {/* Gujarati hint */}
        <p className="text-muted mb-3">
          Gujarati: <span className="fw-semibold">{question.hintGujarati}</span>
        </p>

        {/* Letter buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
          {lettersPool.map((letter, index) => (
            <button
              key={`${letter}-${index}`}
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={() => handleLetterClick(index)}
              disabled={
                isLocked || selectedLetters.length >= question.word.length
              }
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="d-flex justify-content-center gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleBackspace}
            disabled={isLocked || !selectedLetters.length}
          >
            ⌫ Backspace
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleClear}
            disabled={isLocked || !selectedLetters.length}
          >
            Clear
          </button>
        </div>

        {!isComplete && (
          <p className="text-muted small mt-2">
            Tip: Tap letters to fill all boxes.
          </p>
        )}
      </div>
    </div>
  );
};

export default PictureWordCard;
