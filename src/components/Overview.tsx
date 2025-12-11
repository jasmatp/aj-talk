import React from "react";
import { Badge } from "react-bootstrap";

const Overview: React.FC = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f9f6f2",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <h2 className="shadow-title">Welcome to AJ Talk</h2>
      <h3>
        <Badge bg="success" className="white-space">
          {" "}
          Your one-stop app for learning English with fun, interactive lessons.{" "}
        </Badge>
      </h3>

      <p
        style={{
          fontSize: "1rem",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Explore topics like speaking basics, grammar fundamentals, listening
        practice, conversation skills, and engaging challenges designed for all
        levels. Build your confidence step-by-step and enjoy your English
        learning journey with us!
      </p>
      <h4 className="mt-2">
        <Badge bg="info" className="white-space">
          Choose a topic below to get started on your learning journey.
        </Badge>
      </h4>
    </section>
  );
};

export default Overview;
