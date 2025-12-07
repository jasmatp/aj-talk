import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { grammarLession } from "../../mochData/grammarData";
import { Badge, Button, Form } from "react-bootstrap";
import { useDebounce } from "../../hooks/useDebounce";
import { useGrammar } from "../../hooks/useGrammar";
import MultiCircleSpinner from "../MultiCircleSpinner";

const Grammar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { grammarData, loading } = useGrammar();

  const debouncedSearch = useDebounce(searchTerm, 400);

  // Filter lessons by title based on debounced search
  const filteredLessons = useMemo(() => {
    if (!debouncedSearch) return grammarData;
    const lower = debouncedSearch.toLowerCase();
    return grammarData.filter((l) => l.title.toLowerCase().includes(lower));
  }, [debouncedSearch, grammarData]);

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }
  return (
    <div>
      <Button variant="light" className="m-2" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          Grammar Lessons
        </Badge>
      </h2>

      {/* Search by title */}
      <Form.Group className="w-50 m-3 my-0" controlId="lessonSearch">
        <Form.Control
          type="search"
          placeholder="Search grammar lesson by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <div className="row m-2 g-3 mb-5">
        {filteredLessons.map((lesson, idx) => (
          <div key={idx} className="col-sm-6 col-md-6 col-lg-4">
            <div
              className="card rounded-lg shadow p-2 d-flex h-100 w-100 align-items-center"
              style={{ backgroundColor: idx % 2 === 0 ? "#bff2c6" : "#e9ecef" }}
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
                <Button
                  variant="link"
                  onClick={() => navigate(`/grammar/${idx}`)}
                >
                  Tap to Learn
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grammar;
