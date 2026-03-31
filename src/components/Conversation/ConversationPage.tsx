import React from "react";
// import { conversations } from "../../mochData/conversationData";
import { Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Conversation/Conversation.css";
import { useConversation } from "../../hooks/useConversation";
import MultiCircleSpinner from "../MultiCircleSpinner";

const ConversationPage: React.FC = () => {
  const navigate = useNavigate();
  const { conversationData, loading } = useConversation();

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  return (
    <div>
      <Button variant="light" className="m-2" onClick={() => navigate("/")}>
        <i className="bi bi-arrow-left"></i> Back
      </Button>
      <h2>
        <Badge bg="secondary" className="m-2">
          Conversations
        </Badge>
      </h2>
      <h4 className="m-2"><Badge bg="info" className="white-space">Choose a real-life situation and practice listening and speaking</Badge></h4>
      {/* Title List */}
      <div
        style={{
          borderRight: "1px solid #ccc",
          padding: "10px",
        }}
        className="row"
      >
        {conversationData.map((group, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div
              className="conversation-card"
              onClick={() => navigate(`/convertion/${index}`)}
            >
              <img
                src={group.image}
                alt={group.title}
                className="conversation-img"
              />
              <div className="conversation-info">
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
