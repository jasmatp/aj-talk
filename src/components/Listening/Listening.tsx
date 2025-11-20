import React from "react";
import { lestningLession } from "../../mochData/lesteningData";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const Listening = () => {
  const navigate = useNavigate();
  return (
    <div className="m-2">
      {lestningLession.map((lesson, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <Button variant="link" onClick={() => navigate("/")}>
            ← Back
          </Button>
          <h2 className="mt-2">
            <Badge bg="secondary">English Listening Lessons </Badge>{" "}
          </h2>

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
