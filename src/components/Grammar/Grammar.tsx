import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { grammarLession } from "../../mochData/grammarData";
import { Badge, Button } from "react-bootstrap";

const Grammar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="link" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          Grammar Lessons
        </Badge>
      </h2>
      <div className="row m-2 g-3 mb-5">
        {grammarLession.map((lesson, idx) => (
          // <div
          //   key={idx}
          //   className="rounded-lg shadow-md p-2 flex flex-col items-center"
          // >
          //   <h4 className="mb-2">{lesson.title}</h4>
          //   <Link
          //     to={`/grammar/${idx}`}
          //     className="text-blue-600 hover:underline"
          //   >
          //     Learn More
          //   </Link>
          //   <hr />
          // </div>
          <div key={idx} className="col-sm-6 col-md-6 col-lg-4">
            <div
              key={idx}
              className="card rounded-lg shadow p-2 d-flex h-100 w-100 align-items-center"
            >
              <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-2"
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {lesson.title.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-center">
                <h5 className="card-title text-center">{lesson.title}</h5>
                <a href="/grammar/0" className="btn btn-link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grammar;
