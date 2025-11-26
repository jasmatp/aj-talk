import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { conversations } from "../../mochData/conversationData";
import { Badge, Button, Card } from "react-bootstrap";

const ConversationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const index = Number(id);
  const group = conversations[index];

  if (!group) return <div>Conversation group not found</div>;

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <Button variant="link" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          {group.title}
        </Badge>
      </h2>
      {group.conversations.map((conv) => (
        <Card key={conv.id} className="mb-3">
          <Card.Header>{`Conversation ${conv.id}`}</Card.Header>
          <Card.Body>
            <div className="row">
                <div className="col-md-4">
                    <img src={group.image} alt="conversation" className="lesson-img" />
                </div>
              {/* English */}
              <div className="col-md-4">
                <h6>English</h6>
                {conv.lines.map((line, i) => (
                  <Card.Text key={i}>{line}</Card.Text>
                ))}
              </div>

              {/* Gujarati */}
              <div className="col-md-4">
                {conv.linesGuj && (
                  <>
                    <h6>Gujarati</h6>
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
