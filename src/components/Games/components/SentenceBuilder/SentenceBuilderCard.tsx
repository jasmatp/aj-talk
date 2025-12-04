import React, { useEffect, useState } from "react";
import { SentenceQuestion } from "../../types/sentence";

interface SentenceBuilderCardProps {
  question: SentenceQuestion;
  onCorrectChange: (isCorrect: boolean) => void;
  isChecked: boolean;
}

const shuffleArray = (array: string[]): string[] => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const SentenceBuilderCard: React.FC<SentenceBuilderCardProps> = ({
  question,
  onCorrectChange,
  isChecked,
}) => {
  const [currentWords, setCurrentWords] = useState<string[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    // On new question: shuffle words
    setCurrentWords(shuffleArray(question.words));
    setDraggedIndex(null);
    onCorrectChange(false);
  }, [question, onCorrectChange]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;

    setCurrentWords((prev) => {
      const newArr = [...prev];
      const temp = newArr[draggedIndex];
      newArr[draggedIndex] = newArr[index];
      newArr[index] = temp;
      return newArr;
    });
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!isChecked) return;
    const isCorrect = currentWords.join(" ") === question.words.join(" ");
    onCorrectChange(isCorrect);
  }, [isChecked, currentWords, question.words, onCorrectChange]);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="mb-2 d-flex justify-content-between">
          <span className="badge bg-info text-dark">Sentence Builder</span>
          <span className="badge bg-secondary">{question.hint}</span>
        </div>

        <p className="mb-1 fw-semibold">
          Arrange the words to make a correct sentence:
        </p>

        {/* Drag area */}
        <div className="border rounded p-3 mb-3 bg-light">
          <div className="d-flex flex-wrap gap-2">
            {currentWords.map((word, index) => (
              <div
                key={`${word}-${index}`}
                className="btn btn-outline-primary btn-sm"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Gujarati Translation / Hint */}
        <p className="text-muted small mb-0">
          Gujarati meaning:{" "}
          <span className="fw-semibold">{question.translationGujarati}</span>
        </p>
      </div>
    </div>
  );
};

export default SentenceBuilderCard;
