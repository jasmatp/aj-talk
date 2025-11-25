import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { grammarLession } from "../../mochData/grammarData";
import { GrammarLesson } from "../../types/types";
import { Badge, Button } from "react-bootstrap";
import { practiceQuestions } from "../../mochData/grammarQuiz";
import PracticeQuiz from "./PracticeQuiz";

const GrammarDetail: React.FC = () => {
  const { idx } = useParams<{ idx: string }>();
  const lessonIndex = Number(idx);
  const [practice, setPractice] = useState(false);
  const navigate = useNavigate();

  const lesson = grammarLession[lessonIndex];

  if (!lesson) return <div>Lesson not found</div>;

  const handlePractice = () => {
    setPractice(true);
  };

  // Get practice questions by lesson title (fallback to empty array)
  const questionsForLesson = practiceQuestions[lesson.title] || [];

  return (
    <>
      {!practice ? (
        <div className="container">
          <Button variant="link" onClick={() => navigate(-1)}>
            ← Back
          </Button>

          <div className="mb-2">
            <h2 className="text-decoration-underline">{lesson.title}</h2>
          </div>

          <Badge bg="info" className="text-start text-wrap">
            {lesson.remember && (
              <ul className="p-1 m-0">
                <Badge bg="dark" className="fs-5">
                  Remember
                </Badge>
                {lesson.remember.map((r, i) => (
                  <p
                    className="text-decoration-none m-0 fs-6 fst-italic"
                    key={i}
                  >
                    {r}
                  </p>
                ))}
                <div className="mt-2">
                  {lesson?.rememberGuj &&
                    lesson?.rememberGuj.map((r, i) => (
                      <p
                        className="text-decoration-none m-0 fs-6 fst-italic"
                        key={i}
                      >
                        {r}
                      </p>
                    ))}
                </div>
              </ul>
            )}
          </Badge>

          <div className="mt-3">
            {Object.keys(lesson).map((key) => {
              // match only English details like: details1, details2...
              if (/^details[0-9]+$/.test(key)) {
                const num = key.replace("details", "");

                const english = lesson[key as keyof GrammarLesson];
                const gujarati =
                  lesson[`details${num}Guj` as keyof GrammarLesson];
                const examples = lesson[
                  `example${num}` as keyof GrammarLesson
                ] as string[];

                return (
                  <div key={key} className="mb-3">
                    {/* English detail */}
                    <p className="m-0">
                      <strong>⇒ {english}</strong>
                    </p>

                    {/* Gujarati detail */}
                    {gujarati && (
                      <p className="m-0 text-success">
                        <strong>⇒ {gujarati}</strong>
                      </p>
                    )}

                    {/* Examples */}
                    {examples && (
                      <ul className="mt-1">
                        <p className="m-0 fw-bold">Example:</p>
                        {examples.map((ex, j) => (
                          <li key={j}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return null;
            })}
            <Button
              variant="danger"
              size="lg"
              className="mb-4 w-2 check-prog"
              onClick={handlePractice}
            >
              Check Your Progress
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {questionsForLesson.length > 0 ? (
            <PracticeQuiz questions={questionsForLesson} />
          ) : (
            <p>No practice questions available for this lesson.</p>
          )}
        </div>
      )}
    </>
  );
};

export default GrammarDetail;
