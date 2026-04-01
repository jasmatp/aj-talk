import React, { useEffect, useMemo, useState } from "react";
import { Level, WordCategory, WordSortingSet } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import WordSortingBoard from "./WordSortingBoard";
import { useTheme } from "../../../context/ThemeContext";
// import { wordSortingSets } from "../../data/wordSortingQuestions";
import BackButton from "../../../BackButton";
import { Badge } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const WordSortingApp: React.FC = () => {
  const { isDark } = useTheme();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0);
  const [assignments, setAssignments] = useState<
    Record<string, WordCategory | null>
  >({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0,
  });

  const [wordSortingSet, setWordSortingSet] = useState<WordSortingSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/wordSortingSets.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setWordSortingSet(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // All sets for the current level
  const levelSets = useMemo(
    () =>
      selectedLevel
        ? wordSortingSet.filter((s) => s.level === selectedLevel)
        : [],
    [selectedLevel, wordSortingSet]
  );

  const currentSet: WordSortingSet | null =
    levelSets.length > 0 ? levelSets[currentSetIndex] ?? null : null;

  const resetForSet = (set: WordSortingSet | null) => {
    setAssignments({});
    setShowResult(false);
    if (set) {
      setScore({ correct: 0, total: set.words.length });
    } else {
      setScore({ correct: 0, total: 0 });
    }
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    setCurrentSetIndex(0);
    const sets = wordSortingSet.filter((s) => s.level === level);
    const first = sets[0] ?? null;
    resetForSet(first);
  };

  const handleAssign = (wordId: string, category: WordCategory | null) => {
    setAssignments((prev) => ({
      ...prev,
      [wordId]: category,
    }));
    setShowResult(false);
  };

  const handleCheck = () => {
    if (!currentSet) return;

    let correct = 0;
    currentSet.words.forEach((w) => {
      if (assignments[w.id] === w.category) correct += 1;
    });

    setScore({ correct, total: currentSet.words.length });
    setShowResult(true);
  };

  const handleResetBoard = () => {
    resetForSet(currentSet);
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    setCurrentSetIndex(0);
    setAssignments({});
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
  };

  const handleNextSet = () => {
    if (!selectedLevel) return;
    if (currentSetIndex >= levelSets.length - 1) return; // already last set

    const nextIndex = currentSetIndex + 1;
    setCurrentSetIndex(nextIndex);
    const nextSet = levelSets[nextIndex] ?? null;
    resetForSet(nextSet);
  };

  const isLastSet =
    selectedLevel !== null &&
    levelSets.length > 0 &&
    currentSetIndex === levelSets.length - 1;

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

  return (
    <div
      className={`min-vh-100 d-flex align-items-center ${
        isDark ? "bg-dark text-light" : ""
      }`}
    >
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="mb-2">
              <BackButton className="m-2" to="/games" />
              <h2>
                <Badge bg="secondary" className="m-2">
                  Word Sorting Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Drag each word into the correct box: <strong>Noun</strong>,{" "}
                <strong>Verb</strong>, or <strong>Adjective</strong>. 🧠
              </p>
            </div>

            {/* Level selector first */}
            {!selectedLevel && (
              <LevelSelector onSelectLevel={handleSelectLevel} />
            )}

            {/* Level selected but no sets */}
            {selectedLevel && levelSets.length === 0 && (
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <p className="text-muted mb-3">
                    No word-sorting sets available for this level yet.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleChangeLevel}
                  >
                    Choose Another Level
                  </button>
                </div>
              </div>
            )}

            {/* Game board */}
            {selectedLevel && currentSet && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-success">
                    Correct: {score.correct} / {score.total}
                  </span>
                  <span className="text-muted small text-capitalize">
                    Level: {selectedLevel}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-primary">
                    Set {currentSetIndex + 1} of {levelSets.length}
                  </span>
                </div>

                <WordSortingBoard
                  setData={currentSet}
                  assignments={assignments}
                  onAssign={handleAssign}
                  showResult={showResult}
                />

                {showResult && (
                  <div className="alert alert-info mt-3 mb-0">
                    You placed <strong>{score.correct}</strong> out of{" "}
                    <strong>{score.total}</strong> words correctly.
                  </div>
                )}

                <div className="d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleResetBoard}
                  >
                    Reset Board
                  </button>

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleCheck}
                    >
                      Check Answers
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={handleNextSet}
                      disabled={isLastSet}
                    >
                      Next Set
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-sm"
                      onClick={handleChangeLevel}
                    >
                      Change Level
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="text-center mt-3">
              <small className="text-muted">
                Tip: After sorting, ask kids to make one sentence with each
                word.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSortingApp;
