import React, { useMemo, useState } from "react";
import { Level } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import PictureWordCard from "./PictureWordCard";
import { pictureWordQuestions } from "../../data/pictureWords";
import { useTheme } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const PictureWordApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const levelQuestions = useMemo(
    () =>
      selectedLevel
        ? pictureWordQuestions.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel]
  );

  const totalQuestions = levelQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? levelQuestions[currentIndex] : null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setCurrentAnswer("");
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

    const answer = currentAnswer.trim().toUpperCase();
    const correct = currentQuestion.word.trim().toUpperCase();

    const ok = answer.length === correct.length && answer === correct;

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
    setCurrentAnswer("");
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

  return (
    <div
      className={`d-flex align-items-center ${
        isDark ? "bg-dark text-light" : ""
      }`}
    >
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="mb-2">
              <Button variant="link" onClick={() => navigate("/games")}>
                ← Back
              </Button>
              <h2>
                <Badge bg="secondary" className="m-2">
                  Picture to Word Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Choose a level and spell the word from the picture. 🎈
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
                    Level: {selectedLevel} • Picture {currentIndex + 1} of{" "}
                    {totalQuestions}
                  </span>
                </div>

                <PictureWordCard
                  question={currentQuestion}
                  onWordChange={setCurrentAnswer}
                  isLocked={isLocked}
                />

                {isLocked && isCorrect !== null && (
                  <div className="mt-3">
                    {isCorrect ? (
                      <div className="alert alert-success mb-0">
                        ✅ Correct! Very good! 👏
                      </div>
                    ) : (
                      <div className="alert alert-danger mb-0">
                        ❌ Not correct. The right spelling is{" "}
                        <strong>{currentQuestion.word}</strong>.
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
                      disabled={isLocked || !currentAnswer.length}
                    >
                      Check Word
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
              <h5 className="text-muted">
                <Badge bg="info">
                  Tip: Ask kids to say the word aloud while spelling it.
                </Badge>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureWordApp;
