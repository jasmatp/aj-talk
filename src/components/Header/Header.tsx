import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-0">
      <Container className="m-2">
        <Navbar.Brand href="/" className="align-items-center">
          <img
            alt="AJ-TALK Logo"
            src="/aj-talk-logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="slogan">English Learning and Speaking Practice</span>
        </Navbar.Brand>
        <a href="/">Home</a>
      </Container>
    </Navbar>
  );
};

export default Header;
