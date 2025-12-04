import React from "react";

interface ScoreBoardProps {
  score: number;
  currentIndex: number;
  totalQuestions: number;
  bestScore?: number | null;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  score,
  currentIndex,
  totalQuestions,
  bestScore,
}) => {
  return (
    // <div className="d-flex justify-content-between align-items-center mb-3">
    //   <div>
    //     <span className="badge bg-success me-2">Score: {score}</span>
    //   </div>
    //   <div className="text-muted small">
    //     Progress: {currentIndex}/{totalQuestions}
    //   </div>
    // </div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <span className="badge bg-success me-2">Score: {score}</span>
        {typeof bestScore === "number" && (
          <span className="badge bg-warning text-dark">Best: {bestScore}</span>
        )}
      </div>
      <div className="text-muted small">
        Progress: {currentIndex + 1}/{totalQuestions}
      </div>
    </div>
  );
};

export default ScoreBoard;
