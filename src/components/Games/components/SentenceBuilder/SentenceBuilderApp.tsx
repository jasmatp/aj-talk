import React, { useEffect, useMemo, useState } from "react";
import { Level } from "../../types/quiz";
// import { sentenceQuestions } from "../../data/sentences";
import LevelSelector from "../LevelSelector";
import SentenceBuilderCard from "./SentenceBuilderCard";
import { useTheme } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";
import { SentenceQuestion } from "../../types/sentence";

const SentenceBuilderApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [sentenceBuilder, setSentenceBuilder] = useState<SentenceQuestion[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const levelQuestions = useMemo(
    () =>
      selectedLevel
        ? sentenceBuilder.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel, sentenceBuilder]
  );

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/sentenceBuilder.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setSentenceBuilder(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

  const totalQuestions = levelQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? levelQuestions[currentIndex] : null;

  const resetState = () => {
    setCurrentIndex(0);
    setIsChecked(false);
    setIsCurrentCorrect(false);
    setScore(0);
    setFinished(false);
  };

  const loadBestScore = (level: Level): number | null => {
    const saved = localStorage.getItem(`sentenceBuilder_highScore_${level}`);
    return saved ? Number(saved) : null;
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    resetState();
    setBestScore(loadBestScore(level));
  };

  const handleCheck = () => {
    if (isChecked || !currentQuestion) return;
    setIsChecked(true);
    if (isCurrentCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const finalizeGame = () => {
    setFinished(true);
    if (!selectedLevel) return;

    const key = `sentenceBuilder_highScore_${selectedLevel}`;
    const saved = localStorage.getItem(key);
    const savedNum = saved ? Number(saved) : 0;

    if (score > savedNum) {
      localStorage.setItem(key, String(score));
      setBestScore(score);
    }
  };

  const handleNext = () => {
    if (!selectedLevel) return;

    const isLast = currentIndex === totalQuestions - 1;
    if (isLast) {
      finalizeGame();
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setIsChecked(false);
    setIsCurrentCorrect(false);
  };

  const handleRestartSameLevel = () => {
    resetState();
    if (selectedLevel) {
      setBestScore(loadBestScore(selectedLevel));
    }
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    resetState();
    setBestScore(null);
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
            <div className="mb-0">
              <Button variant="light" className="m-2" onClick={() => navigate("/games")}>
                <i className="bi bi-arrow-left"></i> Back
              </Button>
              <h2>
                <Badge bg="secondary" className="m-2">
                  Sentence Builder Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Arrange the words in correct order. Gujarati meaning is shown as
                hint.
              </p>
            </div>

            {!selectedLevel && (
              <LevelSelector onSelectLevel={handleSelectLevel} />
            )}

            {selectedLevel &&
              !finished &&
              totalQuestions > 0 &&
              currentQuestion && (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span className="badge bg-success me-2">
                        Score: {score} / {totalQuestions}
                      </span>
                      {typeof bestScore === "number" && (
                        <span className="badge bg-warning text-dark">
                          Best: {bestScore}
                        </span>
                      )}
                    </div>
                    <span className="text-muted small">
                      Sentence {currentIndex + 1} of {totalQuestions}
                    </span>
                  </div>

                  <SentenceBuilderCard
                    question={currentQuestion}
                    onCorrectChange={setIsCurrentCorrect}
                    isChecked={isChecked}
                  />

                  {isChecked && (
                    <div className="mt-3">
                      {isCurrentCorrect ? (
                        <div className="alert alert-success mb-0">
                          ✅ Correct sentence! ખૂબ સરસ.
                        </div>
                      ) : (
                        <div className="alert alert-danger mb-0">
                          ❌ Not correct. See the correct sentence below.
                        </div>
                      )}
                      <p className="mt-2 mb-0 small">
                        Correct sentence:{" "}
                        <strong>{currentQuestion.words.join(" ")}</strong>
                      </p>
                    </div>
                  )}

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleRestartSameLevel}
                    >
                      Restart Level
                    </button>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleCheck}
                        disabled={isChecked}
                      >
                        Check Sentence
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleNext}
                        disabled={!isChecked}
                      >
                        {currentIndex === totalQuestions - 1
                          ? "Finish Level"
                          : "Next"}
                      </button>
                    </div>
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

            {selectedLevel && finished && (
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h4 className="mb-3">Level Finished 🎉</h4>
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
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRestartSameLevel}
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

            {selectedLevel && !finished && totalQuestions === 0 && (
              <div className="alert alert-warning mt-3">
                No sentences for this level yet. Please choose another level.
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

            <div className="text-center mt-2">
              <h5 className="text-muted">
                <Badge bg="info">
                  Tip: Think about Subject + Verb + Object order.
                </Badge>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuilderApp;
