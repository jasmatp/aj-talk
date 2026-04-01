import React, { useEffect, useMemo, useState } from "react";
import { Level, GrammarFixerQuestion } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import GrammarFixerCard from "./GrammarFixerCard";
import { useTheme } from "../../../context/ThemeContext";
// import { grammarFixerQuestions } from "../../data/grammarFixerQuestions";
import BackButton from "../../../BackButton";
import { Badge } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const GrammarFixerApp: React.FC = () => {
  const { isDark } = useTheme();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(
    null
  );
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const [grammarFixer, setGrammarFixer] = useState<GrammarFixerQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/grammarFixer.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setGrammarFixer(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter questions for selected level
  const levelQuestions: GrammarFixerQuestion[] = useMemo(
    () =>
      selectedLevel
        ? grammarFixer.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel, grammarFixer]
  );

  const totalQuestions = levelQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? levelQuestions[currentIndex] : null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setSelectedWordIndex(null);
    setIsLocked(false);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    resetLevelState();
  };

  const handleCheck = () => {
    if (!currentQuestion || isLocked) return;
    if (selectedWordIndex === null) return;

    const ok = selectedWordIndex === currentQuestion.incorrectWordIndex;

    setIsCorrect(ok);
    setIsLocked(true);

    if (ok) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!currentQuestion || !isLocked) return;

    const isLast = currentIndex === totalQuestions - 1;
    if (isLast) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedWordIndex(null);
    setIsLocked(false);
    setIsCorrect(null);
  };

  const handleRestartLevel = () => {
    resetLevelState();
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    resetLevelState();
  };

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
          <div className="col-12 col-md-8 col-lg-6">
            <div className="mb-2">
              <BackButton className="m-2" to="/games" />
              <h2>
                <Badge bg="secondary" className="m-2">
                  Grammar Fixer Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Choose a level and find the <strong>wrong word</strong> in each
                sentence. 📝
              </p>
            </div>

            {/* If no level selected yet */}
            {!selectedLevel && (
              <LevelSelector onSelectLevel={handleSelectLevel} />
            )}

            {/* Game area */}
            {selectedLevel && !finished && currentQuestion && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-success">
                    Score: {score} / {totalQuestions}
                  </span>
                  <span className="text-muted small text-capitalize">
                    Level: {selectedLevel} • Sentence {currentIndex + 1} of{" "}
                    {totalQuestions}
                  </span>
                </div>

                <GrammarFixerCard
                  question={currentQuestion}
                  selectedWordIndex={selectedWordIndex}
                  onSelectWord={setSelectedWordIndex}
                  isLocked={isLocked}
                />

                {/* Result message */}
                {isLocked && isCorrect !== null && (
                  <div className="mt-3">
                    {isCorrect ? (
                      <div className="alert alert-success mb-0">
                        ✅ Correct! Great catch! 👏
                      </div>
                    ) : (
                      <div className="alert alert-danger mb-0">
                        ❌ Not correct.
                        <br />
                        The incorrect word should be{" "}
                        <strong>{currentQuestion.correctWord}</strong>.
                        <br />
                        <strong>Correct sentence:</strong>{" "}
                        {currentQuestion.correctSentence}
                        <br />
                        <strong>Why?</strong> {currentQuestion.explanation}
                      </div>
                    )}
                  </div>
                )}

                <div className="d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleRestartLevel}
                  >
                    Restart Level
                  </button>

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleCheck}
                      disabled={
                        isLocked ||
                        selectedWordIndex === null ||
                        !currentQuestion
                      }
                    >
                      Check Answer
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleNext}
                      disabled={!isLocked}
                    >
                      {currentIndex === totalQuestions - 1
                        ? "Finish Level"
                        : "Next"}
                    </button>
                  </div>
                </div>

                <div className="text-end mt-2">
                  <button
                    type="button"
                    className="btn btn-link btn-sm"
                    onClick={handleChangeLevel}
                  >
                    Change Level
                  </button>
                </div>
              </>
            )}

            {/* Finished screen */}
            {selectedLevel && finished && (
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h4 className="mb-3">Level Finished 🎉</h4>
                  <p className="lead">
                    Your Score:{" "}
                    <span className="fw-bold">
                      {score} / {totalQuestions}
                    </span>
                  </p>
                  <p className="text-muted">
                    Play again or choose another level.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRestartLevel}
                    >
                      Play Same Level Again
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleChangeLevel}
                    >
                      Choose Another Level
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center mt-3">
              <small className="text-muted">
                Tip: Ask kids to explain why the word is wrong, not just find
                it.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarFixerApp;
