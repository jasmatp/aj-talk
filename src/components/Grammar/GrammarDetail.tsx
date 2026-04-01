import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { grammarLession } from "../../mochData/grammarData";
import { GrammarLesson, Question } from "../../types/types";
import { Badge, Button, Card } from "react-bootstrap";
import BackButton from "../BackButton";
// import { practiceQuestions } from "../../mochData/grammarQuiz";
import PracticeQuiz from "./PracticeQuiz";
import { useGrammar } from "../../hooks/useGrammar";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import MultiCircleSpinner from "../MultiCircleSpinner";

type GrammarQuizMap = Record<string, Question[]>;

const GrammarDetail: React.FC = () => {
  const { idx } = useParams<{ idx: string }>();
  const lessonIndex = Number(idx);
  const { grammarData, loading } = useGrammar();
  const [grammarQuiz, setGrammarQuiz] = useState<GrammarQuizMap>({});
  const [quizLoading, setQuizLoading] = useState(true);
  const [practice, setPractice] = useState(false);
  const { speak, supported } = useSpeechSynthesis();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/grammar/grammarQuiz.json"
    )
      .then((res) => res.json())
      .then((data) => setGrammarQuiz(data[0]))
      .finally(() => setQuizLoading(false));
  }, []);

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (quizLoading) {
    return <MultiCircleSpinner fullScreen size={80} />;
  }

  const lesson = grammarData[lessonIndex];

  if (!lesson) return <div>Lesson not found</div>;

  const handlePractice = () => {
    setPractice(true);
  };

  const handleListen = (text: string) => {
    if (!supported) return;
    speak(text, "en-US");
  };

  // Get practice questions by lesson title (fallback to empty array)
  const questionsForLesson = grammarQuiz[lesson.title] ?? [];

  return (
    <>
      {!practice ? (
        <div className="container py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
            <div>
              <BackButton className="mb-3" />
              <h2 className="mb-2">{lesson.title}</h2>
              <p className="text-muted mb-3">
                Review the grammar rule, listen to the key point, and practice using examples.
              </p>
            </div>
            <Badge bg="info" className="py-2 px-3 text-wrap">
              Grammar Detail
            </Badge>
          </div>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-3">Remember</h5>
              <div className="d-flex flex-column gap-3">
                {lesson.remember?.map((r, i) => (
                  <div key={i} className="p-3 rounded-3 bg-light">
                    <p className="mb-0 fw-semibold">{r}</p>
                  </div>
                ))}
                {lesson.rememberGuj?.map((r, i) => (
                  <div key={i} className="p-3 rounded-3 bg-white border">
                    <p className="mb-0 text-success">{r}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          <div className="row g-4">
            {Object.keys(lesson).map((key) => {
              if (/^details[0-9]+$/.test(key)) {
                const num = key.replace("details", "");
                const english = lesson[key as keyof GrammarLesson];
                const gujarati = lesson[`details${num}Guj` as keyof GrammarLesson];
                const examples = lesson[`example${num}` as keyof GrammarLesson] as string[];

                return (
                  <div key={key} className="col-12">
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                          <div>
                            <h5 className="fw-bold mb-2">Grammar Point {num}</h5>
                            <p className="mb-1">
                              <span className="text-primary fw-semibold">⇒</span> {english}
                            </p>
                            {gujarati && (
                              <p className="mb-0 text-success">
                                <span className="fw-semibold">⇒</span> {gujarati}
                              </p>
                            )}
                          </div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleListen(String(english))}
                            disabled={!supported}
                          >
                            <i className="bi bi-volume-up-fill"></i> Listen
                          </Button>
                        </div>
                        {examples && examples.length > 0 && (
                          <div className="mt-4 bg-light rounded-3 p-3">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-2">
                              <p className="fw-semibold mb-0">Example</p>
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => handleListen(examples.join(". "))}
                                disabled={!supported}
                              >
                                <i className="bi bi-volume-up-fill"></i> Listen All
                              </Button>
                            </div>
                            <ul className="mb-0 list-group list-group-flush">
                              {examples.map((ex, j) => (
                                <li key={j} className="list-group-item d-flex justify-content-between align-items-center py-2 px-0 border-0">
                                  <span>{ex}</span>
                                  <Button
                                    variant="link"
                                    size="sm"
                                    className="p-0"
                                    onClick={() => handleListen(String(ex))}
                                    disabled={!supported}
                                  >
                                    🔊
                                  </Button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="danger"
              size="lg"
              className="px-5"
              onClick={handlePractice}
            >
              Check Your Progress
            </Button>
          </div>
        </div>
      ) : (
        <div className="container py-4">
          {questionsForLesson.length > 0 ? (
            <PracticeQuiz questions={questionsForLesson} />
          ) : (
            <div className="alert alert-warning">
              No practice questions available for this lesson.
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GrammarDetail;
