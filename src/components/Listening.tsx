import React from "react";
import { lestningLession } from "../mochData/lesteningData";
import { Link } from "react-router-dom";

const Listening = () => {
  return (
    <div className="container">
      {lestningLession.map((lesson, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <h2>{lesson.title || `Lesson ${idx + 1}`}</h2>
          <Link
            to={`/listening/${idx}`}
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Lesson {idx}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Listening;
