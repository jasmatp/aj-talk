import React from "react";
import { Level } from "../types/quiz";
import { Badge } from "react-bootstrap";

interface LevelSelectorProps {
  onSelectLevel: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectLevel }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h4 className="mb-3">
          <Badge bg="secondary">Choose Difficulty Level</Badge>
        </h4>
        <p className="text-muted mb-4">
          Pick a level that matches your current skill and challenge yourself in the game.
        </p>

        <div className="d-grid gap-3">
          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            onClick={() => onSelectLevel("beginner")}
          >
            Beginner
          </button>

          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={() => onSelectLevel("intermediate")}
          >
            Intermediate
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-lg"
            onClick={() => onSelectLevel("advanced")}
          >
            Advanced
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;
