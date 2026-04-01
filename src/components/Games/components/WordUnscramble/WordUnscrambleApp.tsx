import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { Level, WordUnscrambleQuestion } from "../../types/quiz";
import LevelSelector from "../LevelSelector";
import WordUnscrambleCard from "./WordUnscrambleCard";
import { useTheme } from "../../../context/ThemeContext";
// import { unscrambleQuestions } from "../../data/unscrambleQuestions";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const QUESTIONS_PER_SESSION = 10;

const shuffleArray = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const scrambleWord = (word: string): string => {
  const chars = word.split("");
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  const scrambled = chars.join("");

  // make sure it's not identical
  if (scrambled.toLowerCase() === word.toLowerCase() && word.length > 1) {
    [chars[0], chars[1]] = [chars[1], chars[0]];
    return chars.join("");
  }

  return scrambled;
};

interface SessionItem {
  question: WordUnscrambleQuestion;
  scrambled: string;
}

const normalize = (value: string) => value.trim().toLowerCase();

const WordUnscrambleApp: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [sessionId, setSessionId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [wordUnscramble, setWordUnscramble] = useState<
    WordUnscrambleQuestion[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/unscrambleWords.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setWordUnscramble(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter questions for selected level
  const baseFiltered: WordUnscrambleQuestion[] = useMemo(
    () =>
      selectedLevel
        ? wordUnscramble.filter((q) => q.level === selectedLevel)
        : [],
    [selectedLevel, wordUnscramble]
  );

  // Build session: shuffled, limited to max 10, with fixed scrambles
  const sessionQuestions: SessionItem[] = useMemo(() => {
    void sessionId;
    const shuffled = shuffleArray(baseFiltered);
    const limited = shuffled.slice(
      0,
      Math.min(QUESTIONS_PER_SESSION, shuffled.length)
    );

    return limited.map((q) => ({
      question: q,
      scrambled: scrambleWord(q.word),
    }));
  }, [baseFiltered, sessionId]);

  const totalQuestions = sessionQuestions.length;
  const currentItem =
    totalQuestions > 0 ? sessionQuestions[currentIndex] : null;
  const currentQuestion = currentItem?.question ?? null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setUserAnswer("");
    setIsLocked(false);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    setSessionId((prev) => prev + 1); // new session for that level
    resetLevelState();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!currentQuestion || isLocked || !userAnswer.trim()) return;

    const correct = normalize(userAnswer) === normalize(currentQuestion.word);
    setIsCorrect(correct);
    setIsLocked(true);

    if (correct) {
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
    setUserAnswer("");
    setIsLocked(false);
    setIsCorrect(null);
  };

  const handleRestartLevel = () => {
    // new session => reshuffle + new scrambles
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

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

  // If no level selected yet → show LevelSelector
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
                <Button variant="light" className="m-2" onClick={() => navigate("/games")}>
                  <i className="bi bi-arrow-left"></i> Back
                </Button>
                <h2>
                  <Badge bg="secondary" className="m-2">
                    Word Unscramble Game
                  </Badge>
                </h2>
                <p className="text-muted m-2">
                  Choose a level and rearrange the letters to form the{" "}
                  <strong>correct word</strong>. 🧩
                </p>
              </div>

              <LevelSelector onSelectLevel={handleSelectLevel} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If level selected but there are no questions for that level
  if (selectedLevel && sessionQuestions.length === 0) {
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
                <h2 className="fw-bold">Word Unscramble Game</h2>
              </div>
              <p className="text-center text-muted">
                No unscramble questions available for this level yet.
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
              <Button variant="light" className="m-2" onClick={() => navigate("/games")}>
                <i className="bi bi-arrow-left"></i> Back
              </Button>
              <h2>
                <Badge bg="secondary" className="m-2">
                  Word Unscramble Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Rearrange the letters to match the <strong>meaning</strong>. ✨
              </p>
            </div>

            {isShortSet && (
              <p className="text-center text-warning small mb-3">
                This level has only {sessionQuestions.length} questions in data.
                Add more to reach {QUESTIONS_PER_SESSION}+.
              </p>
            )}

            {/* Game area */}
            {!finished && currentItem && currentQuestion && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-success">
                    Score: {score} / {totalQuestions}
                  </span>
                  <span className="text-muted small text-capitalize">
                    Level: {selectedLevel} • Word {currentIndex + 1} of{" "}
                    {totalQuestions}
                  </span>
                </div>

                <WordUnscrambleCard
                  scrambled={currentItem.scrambled}
                  clue={currentQuestion.clue}
                  wordLength={currentQuestion.word.length}
                  userAnswer={userAnswer}
                  onAnswerChange={setUserAnswer}
                  isLocked={isLocked}
                  onSubmit={handleSubmit}
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
                        ❌ Not quite. The correct word is{" "}
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
                      onClick={handleSubmit}
                      disabled={isLocked || !userAnswer.trim()}
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
                Tip: You can also write the letters on paper and move them
                around to see the word.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleApp;
