import React, { useMemo, useState } from "react";
import { Level, EmojiQuestion } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import EmojiGuessCard from "./EmojiGuessCard";
import { useTheme } from "../../../context/ThemeContext";
import { emojiQuestions } from "../../data/emojiQuestions";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const QUESTIONS_PER_SESSION = 10;

const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const EmojiGuessApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [sessionId, setSessionId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Filter by level
  const levelQuestions: EmojiQuestion[] = useMemo(
    () =>
      selectedLevel
        ? emojiQuestions.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel]
  );

  // Session: shuffled, max 10
  const sessionQuestions: EmojiQuestion[] = useMemo(() => {
    const shuffled = shuffleArray(levelQuestions);
    return shuffled.slice(0, Math.min(QUESTIONS_PER_SESSION, shuffled.length));
  }, [levelQuestions, sessionId]);

  const totalQuestions = sessionQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? sessionQuestions[currentIndex] : null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsLocked(false);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    setSessionId((prev) => prev + 1);
    resetLevelState();
  };

  const handleCheck = () => {
    if (!currentQuestion || isLocked || !selectedOption) return;

    const ok = selectedOption === currentQuestion.correctOption;
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
    setSelectedOption(null);
    setIsLocked(false);
    setIsCorrect(null);
  };

  const handleRestartLevel = () => {
    setSessionId((prev) => prev + 1);
    resetLevelState();
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    setSessionId((prev) => prev + 1);
    resetLevelState();
  };

  const isShortSet =
    selectedLevel !== null && sessionQuestions.length < QUESTIONS_PER_SESSION;

  // No level selected yet
  if (!selectedLevel) {
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
                <Button variant="link" onClick={() => navigate("/games")}>
                  ← Back
                </Button>
                <h2>
                  <Badge bg="secondary" className="m-2">
                    Emoji Guess Game
                  </Badge>
                </h2>
                <p className="text-muted m-2">
                  Look at the emojis and choose the{" "}
                  <strong>correct English phrase</strong>. 😄
                </p>
              </div>

              <LevelSelector onSelectLevel={handleSelectLevel} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Level selected but no questions
  if (selectedLevel && totalQuestions === 0) {
    return (
      <div
        className={`min-vh-100 d-flex align-items-center ${
          isDark ? "bg-dark text-light" : ""
        }`}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Emoji Guess Game</h2>
              </div>
              <p className="text-center text-muted">
                No emoji questions available for this level yet.
              </p>
              <div className="d-flex justify-content-center mt-3">
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
        </div>
      </div>
    );
  }

  // Normal game UI
  return (
    <div
      className={`min-vh-100 d-flex align-items-center ${
        isDark ? "bg-dark text-light" : ""
      }`}
    >
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Emoji Guess Game</h2>
              <p className="text-muted mb-0">
                Fun way to learn <strong>phrases</strong> and{" "}
                <strong>vocabulary</strong> using emojis. 🎭
              </p>
            </div>

            {isShortSet && (
              <p className="text-center text-warning small mb-3">
                This level has only {totalQuestions} questions in data. Add more
                to reach {QUESTIONS_PER_SESSION}+.
              </p>
            )}

            {!finished && currentQuestion && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-success">
                    Score: {score} / {totalQuestions}
                  </span>
                  <span className="text-muted small text-capitalize">
                    Level: {selectedLevel} • Question {currentIndex + 1} of{" "}
                    {totalQuestions}
                  </span>
                </div>

                <EmojiGuessCard
                  question={currentQuestion}
                  selectedOption={selectedOption}
                  onSelectOption={setSelectedOption}
                  isLocked={isLocked}
                />

                {/* Result message */}
                {isLocked && isCorrect !== null && (
                  <div className="mt-3">
                    {isCorrect ? (
                      <div className="alert alert-success mb-0">
                        ✅ Correct! Nice guess! 👏
                      </div>
                    ) : (
                      <div className="alert alert-danger mb-0">
                        ❌ Not correct. The right answer is{" "}
                        <strong>{currentQuestion.correctOption}</strong>.
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
                      disabled={isLocked || !selectedOption}
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
                Tip: After guessing, ask kids to make their own emoji puzzles
                for the same phrase.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiGuessApp;
