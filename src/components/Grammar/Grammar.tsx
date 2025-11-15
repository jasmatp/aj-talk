import React from "react";
import { Link } from "react-router-dom";
import { grammarLession } from "../../mochData/grammarData";
import { Badge } from "react-bootstrap";

const Grammar = () => {
  return (
    <div>
      <h2>
        <Badge bg="secondary" className="m-2">
          Grammar Lessons
        </Badge>
      </h2>

      <ul>
        {grammarLession.map((lesson, idx) => (
          <li key={idx}>
            <Link to={`/grammar/${idx}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grammar;
