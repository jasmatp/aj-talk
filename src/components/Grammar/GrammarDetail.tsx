import React from "react";
import { useParams, Link } from "react-router-dom";
import { grammarLession } from "../../mochData/grammarData";
import { GrammarLesson } from "../../types/types";
import { Badge } from "react-bootstrap";

const GrammarDetail: React.FC = () => {
  const { idx } = useParams<{ idx: string }>();
  const lessonIndex = Number(idx);

  const lesson = grammarLession[lessonIndex];

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="container">
      <Link to="/">Back</Link>

      <div className="mb-2">
        {/* <Badge bg="secondary"> */}
        <h2>{lesson.title}</h2>
        {/* </Badge> */}
      </div>

      <Badge bg="info" className="text-start">
        {lesson.remember && (
          <ul className="p-1 m-0">
            <Badge bg="dark" className="fs-5">
              Remember
            </Badge>
            {lesson.remember.map((r, i) => (
              <p className="text-decoration-none m-0 fs-6 fst-italic" key={i}>
                {r}
              </p>
            ))}
          </ul>
        )}
      </Badge>
      {Object.keys(lesson).map(
        (key) =>
          key.startsWith("details") && (
            <div key={key}>
              <p className="m-0">
                <strong>
                  {`=>`} {lesson[key as keyof GrammarLesson]}
                </strong>
              </p>
              {lesson[
                `example${key.replace("details", "")}` as keyof GrammarLesson
              ] && (
                <ul>
                  <p className="m-0">Example:</p>
                  {(
                    lesson[
                      `example${key.replace(
                        "details",
                        ""
                      )}` as keyof GrammarLesson
                    ] as string[]
                  ).map((ex, j) => (
                    <li key={j}>{ex}</li>
                  ))}
                </ul>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default GrammarDetail;
