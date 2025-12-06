import React, { useEffect, useMemo, useState } from "react";
import { Level, ListeningQuestion } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import ListeningCard from "./ListeningCard";
import { useTheme } from "../../../context/ThemeContext";
// import { listeningQuestions } from "../../data/listeningQuestions";
import { useSpeechSynthesis } from "../../../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const ListeningChallengeApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { speak, cancel, isSpeaking, supported } = useSpeechSynthesis();

  const [listeningQuestion, setListeningQuestion] = useState<
    ListeningQuestion[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/listeningQuestions.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setListeningQuestion(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const levelQuestions: ListeningQuestion[] = useMemo(
    () =>
      selectedLevel
        ? listeningQuestion.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel]
  );

  const totalQuestions = levelQuestions.length;
  const currentQuestion =
    totalQuestions > 0 ? levelQuestions[currentIndex] : null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsLocked(false);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
    cancel();
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    resetLevelState();
  };

  const handlePlay = () => {
    if (!currentQuestion) return;
    const parts: string[] = [currentQuestion.correctWord];
    if (currentQuestion.exampleSentence) {
      parts.push(`Example: ${currentQuestion.exampleSentence}`);
    }
    const fullText = parts.join(". ");
    speak(fullText, "en-US");
  };

  const handleOptionSelect = (option: string) => {
    if (isLocked || !currentQuestion) return;
    setSelectedOption(option);
  };

  const handleCheck = () => {
    if (!currentQuestion || isLocked || !selectedOption) return;

    const ok = selectedOption === currentQuestion.correctWord;
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
      cancel();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setIsLocked(false);
    setIsCorrect(null);
    cancel();
  };

  const handleRestartLevel = () => {
    resetLevelState();
  };

  const handleChangeLevel = () => {
    setSelectedLevel(null);
    resetLevelState();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

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
              <Button variant="link" onClick={() => navigate("/games")}>
                ← Back
              </Button>
              <h2>
                <Badge bg="secondary" className="m-2">
                  Listening Challenge
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Choose a level, listen carefully, and pick the{" "}
                <strong>correct word</strong>. 🎧
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
                    Level: {selectedLevel} • Question {currentIndex + 1} of{" "}
                    {totalQuestions}
                  </span>
                </div>

                <ListeningCard
                  question={currentQuestion}
                  selectedOption={selectedOption}
                  onSelectOption={handleOptionSelect}
                  isLocked={isLocked}
                  onPlay={handlePlay}
                  isSpeaking={isSpeaking}
                  supported={supported}
                />

                {/* Result message */}
                {isLocked && isCorrect !== null && (
                  <div className="mt-3">
                    {isCorrect ? (
                      <div className="alert alert-success mb-0">
                        ✅ Correct! Well done! 👏
                      </div>
                    ) : (
                      <div className="alert alert-danger mb-0">
                        ❌ Not correct. The right word is{" "}
                        <strong>{currentQuestion.correctWord}</strong>.
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
                Tip: Ask kids to repeat the word aloud after choosing it.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningChallengeApp;
