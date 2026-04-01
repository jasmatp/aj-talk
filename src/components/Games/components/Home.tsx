import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./game.css";
import BackButton from "../../BackButton";
import { Badge } from "react-bootstrap";

const GamesHome: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`container py-4 ${isDark ? "text-light" : ""}`}>
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
        <div>
          <h2 className="mb-2">
            <Badge bg="secondary">English Playroom</Badge>
          </h2>
          <p className="mb-2 text-muted">
            Practice English with fun games that build listening, grammar, spelling, and vocabulary.
          </p>
          <p className="small text-secondary mb-0">
            Select a game below to start learning in a playful way.
          </p>
        </div>

        <BackButton variant="outline-secondary" to="/" label="Back Home" />
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <Link to="/games/word-match" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/word-match-quiz.png" alt="Word Match Quiz" className="game-img" />
            <div className="game-info">
              <h5>Word Match Quiz</h5>
              <p className="text-muted mb-3">Match words with meanings and build vocabulary fast.</p>
              <div className="btn btn-primary lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/sentence-builder" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/sentence-builder.png" alt="Sentence Builder" className="game-img" />
            <div className="game-info">
              <h5>Sentence Builder</h5>
              <p className="text-muted mb-3">Construct sentences from words and practice grammar order.</p>
              <div className="btn btn-success lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/picture-word" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/picture-word.png" alt="Word from visual clue" className="game-img" />
            <div className="game-info">
              <h5>Picture to Word</h5>
              <p className="text-muted mb-3">Look at pictures and choose the right English word.</p>
              <div className="btn btn-warning lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/spelling-challenge" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/spelling-challenge.png" alt="Spelling Challenge" className="game-img" />
            <div className="game-info">
              <h5>Spelling Challenge</h5>
              <p className="text-muted mb-3">Spell words correctly and level up your writing skills.</p>
              <div className="btn btn-primary lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/listening-challenge" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/listening-challenge.png" alt="Listening Challenge" className="game-img" />
            <div className="game-info">
              <h5>Listening Challenge</h5>
              <p className="text-muted mb-3">Listen carefully and answer questions about short dialogs.</p>
              <div className="btn btn-success lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/word-unscramble" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/word-unscramble.png" alt="Word Unscramble" className="game-img" />
            <div className="game-info">
              <h5>Word Unscramble</h5>
              <p className="text-muted mb-3">Rearrange letters to form the correct English word.</p>
              <div className="btn btn-warning lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/gramma-fixer" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/gramma-fixer.png" alt="Grammar Fixer" className="game-img" />
            <div className="game-info">
              <h5>Grammar Fixer</h5>
              <p className="text-muted mb-3">Correct sentences and learn the proper grammar form.</p>
              <div className="btn btn-primary lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/cloze-test" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/cloze-test.png" alt="Cloze Test" className="game-img" />
            <div className="game-info">
              <h5>Cloze Test</h5>
              <p className="text-muted mb-3">Complete sentences with the best missing words.</p>
              <div className="btn btn-success lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/emoji-guess" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/emoji-guess.png" alt="Emoji Guess" className="game-img" />
            <div className="game-info">
              <h5>Emoji Guess</h5>
              <p className="text-muted mb-3">Match emojis with words for fun vocabulary practice.</p>
              <div className="btn btn-warning lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/flashcard-flip" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/flashcard-flip.png" alt="Flashcard Flip" className="game-img" />
            <div className="game-info">
              <h5>Flashcard Flip</h5>
              <p className="text-muted mb-3">Flip cards to learn new words and review meanings.</p>
              <div className="btn btn-primary lesson-title">Play Now</div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/games/word-sorting" className="game-card text-decoration-none text-reset">
            <img src="/gameImages/word-sorting.png" alt="Word Sorting" className="game-img" />
            <div className="game-info">
              <h5>Word Sorting</h5>
              <p className="text-muted mb-3">Sort words into the right order for stronger sentence skills.</p>
              <div className="btn btn-success lesson-title">Play Now</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamesHome;
