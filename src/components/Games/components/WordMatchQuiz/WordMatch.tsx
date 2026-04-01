import React, { useEffect, useMemo, useState } from "react";
import { Level, Question } from "../../types/quiz";
import ScoreBoard from "./ScoreBoard";
import LevelSelector from "../LevelSelector";
import QuestionCard from "./QuestionCard";
// import { questions } from "../../data/questions";
import { useTheme } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const WordMatchApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const [wordMatch, setWordMatch] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/wordMatchQuestions.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setWordMatch(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const levelQuestions = useMemo(
    () =>
      selectedLevel ? wordMatch.filter((q) => q.level === selectedLevel) : [],
    [selectedLevel, wordMatch]
  );

  const totalQuestions = levelQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? levelQuestions[currentIndex] : null;

  const resetQuizState = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setShowAnswer(false);
    setIsFinished(false);
  };

  const loadBestScore = (level: Level): number | null => {
    const saved = localStorage.getItem(`wordMatch_highScore_${level}`);
    return saved ? Number(saved) : null;
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    resetQuizState();
    setBestScore(loadBestScore(level));
  };

  const handleOptionClick = (optionIndex: number) => {
    if (showAnswer || !currentQuestion) return;

    setSelectedOptionIndex(optionIndex);
    setShowAnswer(true);

    if (optionIndex === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const finalizeLevel = () => {
    setIsFinished(true);
    if (!selectedLevel) return;

    const key = `wordMatch_highScore_${selectedLevel}`;
    const saved = localStorage.getItem(key);
    const savedNum = saved ? Number(saved) : 0;

    if (score > savedNum) {
      localStorage.setItem(key, String(score));
      setBestScore(score);
    }
  };

  const handleNext = () => {
    if (!selectedLevel) return;

    const isLastQuestion = currentIndex === totalQuestions - 1;

    if (isLastQuestion) {
      finalizeLevel();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionIndex(null);
    setShowAnswer(false);
  };

  const handleRestartSameLevel = () => {
    resetQuizState();
    if (selectedLevel) {
      setBestScore(loadBestScore(selectedLevel));
    }
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    resetQuizState();
    setBestScore(null);
  };

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

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
              <Button variant="light" className="m-2" onClick={() => navigate("/games")}>
                <i className="bi bi-arrow-left"></i> Back
              </Button>
              <h2>
                <Badge bg="secondary" className="m-2">
                  Word Match Quiz
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Choose the correct English meaning, Gujarati hint is given below
                each word.
              </p>
            </div>

            {!selectedLevel && (
              <LevelSelector onSelectLevel={handleSelectLevel} />
            )}

            {selectedLevel &&
              totalQuestions > 0 &&
              !isFinished &&
              currentQuestion && (
                <>
                  <ScoreBoard
                    score={score}
                    currentIndex={currentIndex}
                    totalQuestions={totalQuestions}
                    bestScore={bestScore ?? undefined}
                  />

                  <QuestionCard
                    question={currentQuestion}
                    currentIndex={currentIndex}
                    totalQuestions={totalQuestions}
                    selectedOptionIndex={selectedOptionIndex}
                    onOptionClick={handleOptionClick}
                    showAnswer={showAnswer}
                  />

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handleRestartSameLevel}
                      type="button"
                    >
                      Restart Level
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={handleNext}
                      type="button"
                      disabled={!showAnswer}
                    >
                      {currentIndex === totalQuestions - 1
                        ? "Finish Level"
                        : "Next Question"}
                    </button>
                  </div>

                  <div className="text-end mt-2">
                    <button
                      className="btn btn-link btn-sm"
                      type="button"
                      onClick={handleChangeLevel}
                    >
                      Change Level
                    </button>
                  </div>
                </>
              )}

            {selectedLevel && isFinished && (
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h4 className="mb-3">Level Complete 🎉</h4>
                  <p className="lead mb-1">
                    Your Score:{" "}
                    <span className="fw-bold">
                      {score} / {totalQuestions}
                    </span>
                  </p>
                  {typeof bestScore === "number" && (
                    <p className="mb-2">
                      Best Score for this level:{" "}
                      <span className="fw-bold">{bestScore}</span>
                    </p>
                  )}
                  <p className="text-muted">
                    Practice again or try another level.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-2">
                    <button
                      className="btn btn-primary"
                      onClick={handleRestartSameLevel}
                      type="button"
                    >
                      Play Same Level Again
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handleChangeLevel}
                      type="button"
                    >
                      Choose Another Level
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedLevel && !isFinished && totalQuestions === 0 && (
              <div className="alert alert-warning mt-3">
                No questions found for this level. Please choose another level.
                <div className="mt-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleChangeLevel}
                    type="button"
                  >
                    Back to Level Selection
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordMatchApp;
