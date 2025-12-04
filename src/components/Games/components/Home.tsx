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
              <div className="conversation-info">
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
              <div className="conversation-info">
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
              <div className="conversation-info">
                <Link
                  to="/games/picture-word"
                  className="btn btn-warning lesson-title"
                >
                  Picture to Word (Kids)
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
