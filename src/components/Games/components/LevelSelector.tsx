import React from "react";
import { Level } from "../types/quiz";
import { Badge } from "react-bootstrap";

interface LevelSelectorProps {
  onSelectLevel: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectLevel }) => {
  return (
    <div className="card bg-light shadow-sm">
      <div className="card-body">
        <h4 className="mb-2">
          <Badge bg="secondary">Choose Difficulty Level</Badge>
        </h4>
        <p className="text-muted mb-4">
          Start with <strong>Beginner</strong> and slowly go to{" "}
          <strong>Advanced</strong>.
        </p>

        <div className="d-flex flex-column gap-2">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => onSelectLevel("beginner")}
          >
            Beginner
          </button>

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => onSelectLevel("intermediate")}
          >
            Intermediate
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
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
