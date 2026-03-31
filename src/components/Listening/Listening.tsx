import React from "react";
import { lestningLession } from "../../mochData/lesteningData";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const Listening = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4 gap-3">
        <div>
          <h2 className="mb-2">English Listening Lessons</h2>
          <p className="mb-1 text-muted">
            Choose a lesson to practice listening, answer questions, and build your confidence.
          </p>
          <p className="small text-secondary mb-0">
            Each lesson includes a short conversation and follow-up questions.
          </p>
        </div>
        <Button variant="light" onClick={() => navigate("/")}> 
          <i className="bi bi-arrow-left"></i> Back
        </Button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {lestningLession.map((lesson, idx) => (
          <div key={idx} className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="card-title mb-1">Lesson {idx + 1}</h5>
                    <p className="card-subtitle text-muted">{lesson.title}</p>
                  </div>
                  <Badge bg="info" pill>
                    {lesson.questionAnswers.length} Qs
                  </Badge>
                </div>
                <p className="card-text text-muted mb-4">
                  {lesson.conversation[0]?.text || "Practice listening with a short dialogue."}
                </p>
                <div className="mt-auto">
                  <Link className="btn btn-primary" to={`/listening/${idx}`}>
                    Start Lesson
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listening;
