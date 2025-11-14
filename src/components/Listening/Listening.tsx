import React from "react";
import { lestningLession } from "../../mochData/lesteningData";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Listening = () => {
  return (
    <div className="m-2">
      {lestningLession.map((lesson, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <Badge bg="secondary">
            <h2 className="mt-2">English Listening Lessons </h2>
          </Badge>

          <p>Explore English listening lessons and improve your skills.</p>
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
