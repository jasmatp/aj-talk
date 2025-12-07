import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { lestningLession } from "../../mochData/lesteningData";
import { Button } from "react-bootstrap";


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
        <Link to="/listening">Back to Lessons</Link>
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
    <div className="container">
      <Button variant="light" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
      <h2>{lesson.title || `Lesson ${lessonIndex + 1}`}</h2>
      <div>
        <p className="m-0">
          Listen to the conversation and answer the questions.
        </p>
        <p>ધ્યાનથી સાંભળો અને પછી પ્રશ્નોના જવાબ આપો.</p>
      </div>
      <p className="m-0">Click on this button</p>
      <button
        onClick={() => speakText(lesson.conversation)}
        className="btn btn-info"
      >
        Listen
      </button>

      <h4>Questions</h4>
      {lesson.questionAnswers.map((q, idx) => (
        <div key={idx}>
          <p className="m-0">{q.question}</p>
          <ul>
            {q.options.map((opt, oIdx) => (
              <li key={oIdx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    checked={selectedAnswers[idx] === oIdx}
                    onChange={() => handleSelect(idx, oIdx)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          {selectedAnswers[idx] != null && (
            <p
              style={{
                color:
                  selectedAnswers[idx] === q.correctAnswerIndex
                    ? "green"
                    : "red",
              }}
            >
              {selectedAnswers[idx] === q.correctAnswerIndex
                ? "Correct!"
                : `Incorrect. The correct answer is "${
                    q.options[q.correctAnswerIndex]
                  }".`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListeningDetail;
