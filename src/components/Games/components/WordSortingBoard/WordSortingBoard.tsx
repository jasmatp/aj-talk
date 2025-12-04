import React from "react";
import {
  WordCategory,
  WordSortingItem,
  WordSortingSet,
} from "../../types/quiz";

interface WordSortingBoardProps {
  setData: WordSortingSet;
  assignments: Record<string, WordCategory | null>; // wordId -> assigned category
  onAssign: (wordId: string, category: WordCategory | null) => void;
  showResult: boolean;
}

const categoryLabels: Record<WordCategory, string> = {
  noun: "Nouns (Naming words)",
  verb: "Verbs (Action words)",
  adjective: "Adjectives (Describing words)",
};

const WordSortingBoard: React.FC<WordSortingBoardProps> = ({
  setData,
  assignments,
  onAssign,
  showResult,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    category: WordCategory
  ) => {
    e.preventDefault();
    const wordId = e.dataTransfer.getData("text/plain");
    if (!wordId) return;
    onAssign(wordId, category);
  };

  const handleAllowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const unassigned = setData.words.filter(
    (w) => !assignments[w.id]
  );

  const wordsInCategory = (category: WordCategory): WordSortingItem[] =>
    setData.words.filter((w) => assignments[w.id] === category);

  const getWordButtonClass = (item: WordSortingItem): string => {
    let base = "btn btn-sm m-1";

    if (!showResult) {
      return base + " btn-outline-primary";
    }

    const assigned = assignments[item.id];
    const isCorrect = assigned === item.category;

    if (!assigned) return base + " btn-outline-secondary";
    if (isCorrect) return base + " btn-success";
    return base + " btn-danger";
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="text-muted small mb-2">
          Drag each word into the correct box: Noun, Verb, or Adjective.
        </p>

        {/* Unassigned words row */}
        <div className="mb-3">
          <h6 className="mb-2">Words to sort:</h6>
          <div className="border rounded p-2 bg-light">
            {unassigned.length === 0 && (
              <span className="text-muted small">All words placed.</span>
            )}
            {unassigned.map((item) => (
              <button
                key={item.id}
                type="button"
                className="btn btn-outline-primary btn-sm m-1"
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                {item.word}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="row g-3">
          {(["noun", "verb", "adjective"] as WordCategory[]).map((cat) => (
            <div className="col-12 col-md-4" key={cat}>
              <div
                className="border rounded p-2 min-vh-25"
                style={{ minHeight: "140px" }}
                onDragOver={handleAllowDrop}
                onDrop={(e) => handleDrop(e, cat)}
              >
                <h6 className="text-center mb-2">{categoryLabels[cat]}</h6>
                <div className="d-flex flex-wrap justify-content-center">
                  {wordsInCategory(cat).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={getWordButtonClass(item)}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                    >
                      {item.word}
                    </button>
                  ))}
                  {wordsInCategory(cat).length === 0 && (
                    <span className="text-muted small">
                      Drop words here
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted small mt-3 mb-0">
          Tip: <strong>Nouns</strong> name things/people,{" "}
          <strong>verbs</strong> show actions, and{" "}
          <strong>adjectives</strong> describe nouns.
        </p>
      </div>
    </div>
  );
};

export default WordSortingBoard;
