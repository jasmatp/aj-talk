import React, { useState } from "react";
import { PracticeQuizProps } from "../../types/types";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PracticeQuiz: React.FC<PracticeQuizProps> = ({ questions  = []}) => {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, optionIdx: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[qIdx] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.some((ans) => ans === null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const score = answers.reduce((acc: number, ans, idx) => {
    if (ans === questions[idx].correctAnswerIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  // Feedback message based on score
  const getFeedbackMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🌟 Excellent! Perfect score! 🎉✨";
    if (percentage >= 80) return "👍 Very Good! Keep it up! 💪😊";
    if (percentage >= 50) return "🙂 Good effort! You can do even better! 📈";
    return "🙌 Keep practicing! Don't give up! 💡🔥";
  };

  return (
    <div className="container py-4">
      <Button variant="light" className="m-2" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
      <div className="mb-4">
        <h3 className="text-decoration-underline">Practice Quiz</h3>
        <p className="text-muted mb-0">
          Choose the best answer for each question and submit to see your results.
        </p>
      </div>

      <div className="row g-4">
        {questions.map((q, idx) => (
          <div key={idx} className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
                  <div>
                    <p className="mb-1 fw-semibold">
                      {idx + 1}. {q.question}
                    </p>
                  </div>
                  {submitted && (
                    <Badge bg={answers[idx] === q.correctAnswerIndex ? "success" : "danger"}>
                      {answers[idx] === q.correctAnswerIndex ? "Correct" : "Incorrect"}
                    </Badge>
                  )}
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className="col">
                      <label
                        className={`form-check form-check-card p-3 rounded-3 w-100 border ${
                          answers[idx] === oIdx ? "border-primary bg-light" : "border-secondary bg-white"
                        }`}
                      >
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          name={`question-${idx}`}
                          disabled={submitted}
                          checked={answers[idx] === oIdx}
                          onChange={() => handleSelect(idx, oIdx)}
                        />
                        <span className="form-check-label">{opt}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {submitted && answers[idx] !== q.correctAnswerIndex && (
                  <p className="mt-3 text-danger mb-0">
                    Correct answer: <strong>{q.options[q.correctAnswerIndex]}</strong>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex flex-column flex-md-row align-items-center gap-3">
        {!submitted ? (
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Submit Answers
          </Button>
        ) : (
          <div>
            <Badge bg="success" className="mb-2">
              Your Score: {score} / {questions.length}
            </Badge>
            <p className="text-muted mb-0">{getFeedbackMessage()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeQuiz;
