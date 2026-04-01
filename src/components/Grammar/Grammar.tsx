import React, { useMemo, useState } from "react";
// import { grammarLession } from "../../mochData/grammarData";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import BackButton from "../BackButton";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { useGrammar } from "../../hooks/useGrammar";
import MultiCircleSpinner from "../MultiCircleSpinner";

const Grammar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
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
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
        <div>
          <h2 className="mb-2">
            <Badge bg="secondary">Grammar Lessons</Badge>
          </h2>
          <p className="text-muted mb-2">
            Browse grammar topics, preview key points, and jump into lessons with one click.
          </p>
          <p className="small text-secondary mb-0">
            Search by title or scroll through the lesson cards below.
          </p>
        </div>
        <BackButton />
      </div>

      <InputGroup className="mb-4 w-100 w-md-50">
        <Form.Control
          type="search"
          placeholder="Search grammar lesson by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={() => setSearchTerm("")}>Clear</Button>
      </InputGroup>

      {filteredLessons.length === 0 ? (
        <div className="alert alert-warning">No grammar lessons found for that search.</div>
      ) : (
        <div className="row g-4">
          {filteredLessons.map((lesson, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h5 className="card-title mb-1">Lesson {idx + 1}</h5>
                      <p className="text-muted mb-0">{lesson.title}</p>
                    </div>
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 52, height: 52, fontWeight: 700 }}>
                      {lesson.title.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  <p className="card-text text-secondary mb-4" style={{ minHeight: 64 }}>
                    {lesson.details1 ? `${lesson.details1.slice(0, 90)}...` : "Explore grammar rules, examples, and practice."}
                  </p>

                  <div className="mt-auto d-flex flex-column gap-2">
                    <div>
                      <Badge bg="info" className="me-2">
                        {lesson.remember?.length ?? 0} remembers
                      </Badge>
                      <Badge bg="secondary">
                        {lesson.example1?.length ?? 0} examples
                      </Badge>
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/grammar/${idx}`)}
                    >
                      View Lesson
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Grammar;
