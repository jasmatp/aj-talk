import React, { useEffect, useMemo, useState } from "react";
import { Level, Flashcard } from "../../types/quiz";
// import { flashcards } from "../../data/flashcards";
import LevelSelector from "../LevelSelector";
import FlashcardCard from "./FlashcardCard";
import { useTheme } from "../../../context/ThemeContext";
import BackButton from "../../../BackButton";
import { Badge } from "react-bootstrap";
import MultiCircleSpinner from "../../../MultiCircleSpinner";

const FlashcardFlipApp: React.FC = () => {
  const { isDark } = useTheme();

  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [learnAgainCount, setLearnAgainCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/playroom/flashCard.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setFlashcards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const levelCards: Flashcard[] = useMemo(
    () =>
      selectedLevel ? flashcards.filter((c) => c.level === selectedLevel) : [],
    [selectedLevel, flashcards]
  );

  const totalCards = levelCards.length;
  const currentCard = totalCards > 0 ? levelCards[currentIndex] : null;

  const resetLevelState = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setLearnAgainCount(0);
    setFinished(false);
  };

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level);
    resetLevelState();
  };

  const handleToggleFlip = () => {
    if (!currentCard) return;
    setIsFlipped((prev) => !prev);
  };

  const goNextCard = () => {
    const isLast = currentIndex === totalCards - 1;
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setIsFlipped(false);
  };

  const handleMarkKnown = () => {
    setKnownCount((prev) => prev + 1);
    goNextCard();
  };

  const handleMarkLearnAgain = () => {
    setLearnAgainCount((prev) => prev + 1);
    goNextCard();
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

  // No level selected
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
                <BackButton className="m-2" to="/games" />
                <h2>
                  <Badge bg="secondary" className="m-2">
                    Flashcard Flip Game
                  </Badge>
                </h2>
                <p className="text-muted m-2">
                  Choose a level and flip cards to <strong>revise words</strong>
                  . 🔁
                </p>
              </div>

              <LevelSelector onSelectLevel={handleSelectLevel} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Level selected but no cards
  if (selectedLevel && totalCards === 0) {
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
                <h2 className="fw-bold">Flashcard Flip Game</h2>
              </div>
              <p className="text-center text-muted">
                No flashcards available for this level yet.
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

  // Normal UI
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
                  Flashcard Flip Game
                </Badge>
              </h2>
              <p className="text-muted m-2">
                Tap the card to see meaning and decide if you{" "}
                <strong>know it</strong> or want to <strong>learn again</strong>
                . 📚
              </p>
            </div>

            {!finished && currentCard && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-success">Known: {knownCount}</span>
                  <span className="text-muted small text-capitalize">
                    Level: {selectedLevel} • Card {currentIndex + 1} of{" "}
                    {totalCards}
                  </span>
                  <span className="badge bg-warning text-dark">
                    Learn again: {learnAgainCount}
                  </span>
                </div>

                <FlashcardCard
                  card={currentCard}
                  isFlipped={isFlipped}
                  onToggleFlip={handleToggleFlip}
                  onMarkKnown={handleMarkKnown}
                  onMarkLearnAgain={handleMarkLearnAgain}
                />

                <div className="d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleRestartLevel}
                  >
                    Restart Level
                  </button>

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
            {finished && (
              <div className="card shadow-sm mt-3">
                <div className="card-body text-center">
                  <h4 className="mb-3">Revision Finished 🎉</h4>
                  <p className="lead mb-2">
                    Total Cards: <strong>{totalCards}</strong>
                  </p>
                  <p className="mb-1">
                    Known: <strong>{knownCount}</strong>
                  </p>
                  <p className="mb-3">
                    Learn Again: <strong>{learnAgainCount}</strong>
                  </p>
                  <p className="text-muted">
                    You can revise this level again or choose another level.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRestartLevel}
                    >
                      Revise Same Level Again
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
                Tip: After “Known”, try to use the word in your own sentence.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardFlipApp;
