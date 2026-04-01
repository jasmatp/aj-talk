import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { lestningLession } from "../../mochData/lesteningData";
import { Button } from "react-bootstrap";
import BackButton from "../BackButton";


const ListeningDetail = () => {
  const { lessonId } = useParams();
  const lessonIndex = Number(lessonId);
  const lesson = lestningLession[lessonIndex];
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const navigate = useNavigate();

  if (!lesson) {
    return (
      <div>
        <BackButton to="/listening" label="Back to Lessons" className="mb-3" />
        <p>Lesson not found.</p>
      </div>
    );
  }

  const handleSelect = (qIdx: number, optIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIdx]: optIdx,
    }));
  };

  const speakText = (conversation: any[]) => {
    if (!window.speechSynthesis) {
      alert("Sorry, your browser does not support Speech Synthesis.");
      return;
    }

    // Combine all conversation lines into one string
    const textToSpeak = conversation
      .map((line) => `${line.speaker} says: ${line.text}`)
      .join(". ");

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-US"; // Set language as needed
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container py-4">
      <BackButton />

      <div className="mt-3 p-4 bg-light rounded shadow-sm">
        <h2 className="mb-2">{lesson.title || `Lesson ${lessonIndex + 1}`}</h2>
        <p className="mb-1">
          Look at the conversation below, then listen carefully and fill in the
          answers.
        </p>
        <p className="text-muted mb-3">ધ્યાનથી વાંચો, પછી સાંભળો અને જવાબ આપો.</p>

        <div className="d-flex gap-2 flex-wrap mb-3">
          <Button variant="info" onClick={() => speakText(lesson.conversation)}>
            <i className="bi bi-volume-up-fill"></i> Listen
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => setSelectedAnswers({})}
          >
            Reset Answers
          </Button>
        </div>

        <div className="p-3 bg-white border rounded mb-4">
          <h5 className="mb-3">Conversation</h5>
          {lesson.conversation.map((line, index) => (
            <div key={index} className="mb-2">
              <span className="fw-bold">{line.speaker}:</span>{" "}
              <span>{line.text}</span>
            </div>
          ))}
        </div>

        <h4>Fill in the answers</h4>
        <div className="row">
          {lesson.questionAnswers.map((q, idx) => (
            <div key={idx} className="col-12 mb-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text fw-semibold mb-2">{q.question}</p>
                  <div className="row row-cols-1 row-cols-md-2 g-2">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className="col">
                        <label className="form-check form-check-inline w-100 border rounded p-2">
                          <input
                            className="form-check-input me-2"
                            type="radio"
                            name={`question-${idx}`}
                            checked={selectedAnswers[idx] === oIdx}
                            onChange={() => handleSelect(idx, oIdx)}
                          />
                          <span className="form-check-label">{opt}</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  {selectedAnswers[idx] != null && (
                    <div className="mt-3">
                      <span
                        className={`badge rounded-pill ${
                          selectedAnswers[idx] === q.correctAnswerIndex
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {selectedAnswers[idx] === q.correctAnswerIndex
                          ? "Correct"
                          : "Incorrect"}
                      </span>
                      {selectedAnswers[idx] !== q.correctAnswerIndex && (
                        <p className="mt-2 mb-0 text-muted">
                          Correct answer: <strong>{q.options[q.correctAnswerIndex]}</strong>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListeningDetail;
