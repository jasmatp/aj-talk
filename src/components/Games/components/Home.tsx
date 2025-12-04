import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./game.css";
import { Badge, Button } from "react-bootstrap";

const GamesHome: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`d-flex align-items-center ${
        isDark ? "bg-dark text-light" : ""
      }`}
    >
      <div className="w-100">
        <Button variant="link" onClick={() => navigate("/")}>
          ← Back
        </Button>
        <h2>
          <Badge bg="secondary" className="m-2">
            English Playroom
          </Badge>
        </h2>
        <div className="row m-2 g-3 mb-5">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/word-match`)}
            >
              <img
                src="/gameImages/word-match-quiz.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/word-match"
                  className="btn btn-primary lesson-title"
                >
                  Word Match Quiz
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/sentence-builder`)}
            >
              <img
                src="/gameImages/sentence-builder.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/sentence-builder"
                  className="btn btn-success lesson-title"
                >
                  Sentence Builder
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/picture-word`)}
            >
              <img
                src="/gameImages/picture-word.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/picture-word"
                  className="btn btn-warning lesson-title"
                >
                  Picture to Word (Kids)
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/spelling-challenge`)}
            >
              <img
                src="/gameImages/spelling-challenge.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/spelling-challenge"
                  className="btn btn-primary lesson-title"
                >
                 Spelling Challenge
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/listening-challenge`)}
            >
              <img
                src="/gameImages/listening-challenge.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/listening-challenge"
                  className="btn btn-success lesson-title"
                >
                  Listening Challenge
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/word-unscramble`)}
            >
              <img
                src="/gameImages/word-unscramble.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/word-unscramble"
                  className="btn btn-warning lesson-title"
                >
                  Word Unscramble
                </Link>
              </div>
            </div>
          </div>

           <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/gramma-fixer`)}
            >
              <img
                src="/gameImages/gramma-fixer.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/gramma-fixer"
                  className="btn btn-primary lesson-title"
                >
                 Grammar Fixer
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/cloze-test`)}
            >
              <img
                src="/gameImages/cloze-test.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/cloze-test"
                  className="btn btn-success lesson-title"
                >
                 Cloze Test
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/emoji-guess`)}
            >
              <img
                src="/gameImages/emoji-guess.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/emoji-guess"
                  className="btn btn-warning lesson-title"
                >
                  Emoji Guess
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/flashcard-flip`)}
            >
              <img
                src="/gameImages/flashcard-flip.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/flashcard-flip"
                  className="btn btn-primary lesson-title"
                >
                 Flashcard Flip
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="game-card"
              onClick={() => navigate(`/games/word-sorting`)}
            >
              <img
                src="/gameImages/word-sorting.png"
                alt="english-playroom"
                className="game-img"
              />
              <div className="game-info">
                <Link
                  to="/games/word-sorting"
                  className="btn btn-success lesson-title"
                >
                 Word Sorting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesHome;
