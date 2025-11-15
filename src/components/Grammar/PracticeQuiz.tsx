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
    <div className="container">
      <Button variant="link" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h3 className="text-decoration-underline">Practice Quiz</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-3">
          <p className="m-0">
            <strong>
              {idx + 1}. {q.question}
            </strong>
          </p>
          <ul style={{ listStyleType: "none" }} className="m-0">
            {q.options.map((opt, oIdx) => (
              <li key={oIdx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    disabled={submitted}
                    checked={answers[idx] === oIdx}
                    onChange={() => handleSelect(idx, oIdx)}
                  />{" "}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          {submitted && (
            <p
              style={{
                color: answers[idx] === q.correctAnswerIndex ? "green" : "red",
              }}
            >
              {answers[idx] === q.correctAnswerIndex
                ? "Correct!"
                : `Incorrect. Correct answer: "${
                    q.options[q.correctAnswerIndex]
                  }"`}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <Button variant="primary" className="mb-4" size="lg" onClick={handleSubmit}>
          Submit Answers
        </Button>
      ) : (
        <div className="">
          <Badge bg="success">
            <h4>
              Your Score: {score} / {questions.length}
            </h4>
          </Badge>

          <p className="text-red text-center">
            <strong>{getFeedbackMessage()}</strong>
          </p>

        </div>
      )}
    </div>
  );
};

export default PracticeQuiz;
