import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { conversations } from "../../mochData/conversationData";
import { Badge, Button, Card } from "react-bootstrap";
import { useConversation } from "../../hooks/useConversation";
import MultiCircleSpinner from "../MultiCircleSpinner";

const ConversationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { conversationData, loading } = useConversation();

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  const index = Number(id);
  const group = conversationData[index];

  const speakText = (text: string) => {
    if (!window.speechSynthesis) {
      alert("Speech synthesis not supported in this browser.");
      return;
    }
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  if (!group) return <div>Conversation group not found</div>;

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Button variant="light" className="m-2" onClick={() => navigate("/convertion")}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          {group.title}
        </Badge>
      </h2>
      {group.conversations.map((conv, i) => (
        <Card key={conv.id} className="mb-3">
          <Card.Header>{`Conversation ${conv.id}`}</Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={group.image}
                  alt="conversation"
                  className="lesson-img"
                />
              </div>
              {/* English */}
              <div className="col-md-4">
                <h6 className="text-decoration-underline">English</h6>
                <button
                  onClick={() => speakText(conv.lines.join(" "))}
                  className="btn btn-info"
                >
                  🔊 Listen
                </button>
                {conv.lines.map((line, i) => (
                  <Card.Text key={i}>{line}</Card.Text>
                ))}
              </div>

              {/* Gujarati */}
              <div className="col-md-4 text-success">
                {conv.linesGuj && (
                  <>
                    <h6 className="text-decoration-underline">Gujarati</h6>
                    {conv.linesGuj.map((line, i) => (
                      <Card.Text key={i}>{line}</Card.Text>
                    ))}
                  </>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ConversationDetails;
