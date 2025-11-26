import React from "react";
import { conversations } from "../../mochData/conversationData";
import { Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Conversation/Conversation.css";

const ConversationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="link" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          Conversations
        </Badge>
      </h2>
      {/* Title List */}
      <div
        style={{
          borderRight: "1px solid #ccc",
          padding: "10px",
        }}
        className="row"
      >
        {conversations.map((group, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div
              className="lesson-card"
              onClick={() => navigate(`/convertion/${index}`)}
            >
              <img src={group.image} alt={group.title} className="lesson-img" />
              <div className="lesson-info">
                <Link to={`/convertion/${index}`} className="lesson-title">
                  {group.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationPage;
