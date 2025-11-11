import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lessonLinks } from "../mochData/lessonLinks";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { LessonContent, LessonLink } from "../types/types";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LessonDetail: React.FC = () => {
  const [start, setStart] = useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [lessonsPerPage, setLessonsPerPage] = React.useState(5);

  const [showModal, setShowModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<LessonContent | null>(
    null
  );

  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = lessonLinks.slice(
    indexOfFirstLesson,
    indexOfLastLesson
  );

  const totalPages = Math.ceil(lessonLinks.length / lessonsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleStart = () => {
    setStart(true);
  };
  const handleBack = () => {
    setStart(false);
  };
  const handleDetailPage = (lessionContent?: LessonContent) => {
    if (!lessionContent) return;
    setSelectedLesson(lessionContent);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const speakText = (text: string) => {
    if (!window.speechSynthesis) {
      alert("Speech synthesis not supported in this browser.");
      return;
    }
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      {!start ? (
        <div className="m-2">
          <h1 className="lesson-title-main">
            Basics for English Speaking{" "}
            <Button onClick={handleStart}>Let's Start</Button>
          </h1>
          <p className="lesson-description-main">
            This section is designed for English beginners who want to build
            confidence in everyday speaking. We focus on using simple, practical
            phrases to make learning easy.
            <br />
            You can also use these phrases to practice daily communication.
            Additionally, there is an audio file on every detail page, so you
            can listen, practice pronunciation, and try to speak in English.
          </p>
          <p>
            આ વિભાગ અંગ્રેજી શીખવા માટે નવા શીખનારાઓ માટે તૈયાર કરવામાં આવ્યો
            છે, જે રોજિંદા વાતચીતમાં આત્મવિશ્વાસ વધારવા માંગે છે. અમે સરળ અને
            ઉપયોગી વાક્યો પર ધ્યાન કેન્દ્રિત કરીએ છીએ જેથી શીખવું સરળ બને.
            <br />
            તમે આ વાક્યોનો ઉપયોગ રોજિંદી સંવાદમાં પ્રેક્ટિસ માટે પણ કરી શકો છો.
            દરેક વિગતવાર પૃષ્ઠ પર ઓડિયો ફાઈલ પણ છે, જેથી તમે સાંભળી શકો,
            ઉચ્ચારણનો અભ્યાસ કરી શકો અને અંગ્રેજીમાં બોલવાનો પ્રયત્ન કરી શકો.
          </p>
        </div>
      ) : (
        <div className="container justify-content-start">
          <Button onClick={handleBack} className="text-start" variant="link">
            Back
          </Button>
          <Table striped bordered hover responsive="md" className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Lesson Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentLessons.map((lesson: LessonLink, idx: number) => (
                <tr key={lesson.id}>
                  <td>{indexOfFirstLesson + idx + 1}</td>
                  <td>
                    <Link to={""} className="lesson-clickable">
                      {lesson.title}
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDetailPage(lesson?.content)}
                      className="btn btn-info"
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex align-items-center pb-5">
            <Form.Select
              aria-label="Choose lessons per page"
              style={{
                width: 110,
                marginBottom: 20,
                marginRight: 12,
                marginTop: 5,
              }}
              value={lessonsPerPage}
              onChange={(e) => {
                setLessonsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5 / page</option>
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
            </Form.Select>
            <Pagination className="mt-2 pb-2">
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {Array.from({ length: totalPages }, (_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </div>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLesson?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLesson ? (
            <>
              <p className="fw-bold">
                <p className="d-grid">
                  <span>
                    {selectedLesson.detail1}{" "}
                    <button
                      onClick={() => speakText(selectedLesson.detail1)}
                      className="btn btn-info"
                    >
                      Listen
                    </button>
                  </span>
                  <span> {selectedLesson.detail1Guj}</span>
                </p>
              </p>
              <p>
                <em>Example:</em>
                <button
                  onClick={() =>
                    speakText(
                      Array.isArray(selectedLesson?.example1)
                        ? selectedLesson.example1.join(", ")
                        : selectedLesson?.example1 || ""
                    )
                  }
                  className="btn btn-info"
                >
                  Listen
                </button>
              </p>
              {selectedLesson && (
                <ul>
                  {selectedLesson.example1.map((ex, idx) => (
                    <li key={idx}>
                      <strong>{ex}</strong>
                      <br />
                      <span style={{ color: "#555" }}>
                        {selectedLesson.example1Guj[idx]}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {selectedLesson.detail2 && (
                <>
                  <p className="fw-bold">
                    <p className="d-grid">
                      <span>
                        {selectedLesson.detail2}{" "}
                        <button
                          onClick={() =>
                            speakText(selectedLesson.detail2 || "")
                          }
                          className="btn btn-info"
                        >
                          Listen
                        </button>
                      </span>
                      <span> {selectedLesson.detail2Guj}</span>
                    </p>
                  </p>

                  <p>
                    <em>Example:</em>
                    <button
                      onClick={() =>
                        speakText(
                          Array.isArray(selectedLesson?.example2)
                            ? selectedLesson.example2.join(", ")
                            : selectedLesson?.example2 || ""
                        )
                      }
                      className="btn btn-info"
                    >
                      Listen
                    </button>
                  </p>
                </>
              )}
              {selectedLesson && (
                <ul>
                  {selectedLesson.example2 &&
                    selectedLesson.example2.map((ex, idx) => (
                      <li key={idx}>
                        <strong>{ex}</strong>
                        <br />
                        <span style={{ color: "#555" }}>
                          {selectedLesson.example2Guj &&
                            selectedLesson.example2Guj[idx]}
                        </span>
                      </li>
                    ))}
                </ul>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LessonDetail;
