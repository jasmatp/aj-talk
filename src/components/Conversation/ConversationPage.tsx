import React, { useMemo, useState } from "react";
// import { conversations } from "../../mochData/conversationData";
import { Badge, Form } from "react-bootstrap";
import BackButton from "../BackButton";
import { Link } from "react-router-dom";
import "../Conversation/Conversation.css";
import { useConversation } from "../../hooks/useConversation";
import MultiCircleSpinner from "../MultiCircleSpinner";

const ConversationPage: React.FC = () => {
  const { conversationData, loading } = useConversation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = useMemo(
    () =>
      conversationData.filter((group) =>
        group.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [conversationData, searchTerm]
  );

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  return (
    <div className="container py-4 conversation-page">
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
        <div>
          <Badge bg="secondary" className="mb-2">
            Conversations
          </Badge>
          <h2 className="mb-3">Real-life English practice</h2>
          <p className="text-muted mb-0">
            Choose a situation and practice listening and speaking with short role-play dialogs.
          </p>
        </div>

        <BackButton to="/" />
      </div>

      <div className="mb-4">
        <Form>
          <Form.Control
            type="search"
            placeholder="Search by group title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((group, index) => (
            <div className="col" key={index}>
              <Link
                to={`/convertion/${index}`}
                className="conversation-card d-block h-100 text-decoration-none text-reset"
              >
                <div className="conversation-image-wrapper">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="conversation-img"
                  />
                </div>
                <div className="conversation-info px-3 pb-3">
                  <h5 className="lesson-title mb-2">{group.title}</h5>
                  <span className="btn btn-sm btn-primary">Practice</span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">
              No conversation groups match your search.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationPage;
