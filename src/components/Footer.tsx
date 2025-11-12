import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="bottom" className="footer p-0">
      <Container className="justify-content-center">
        <Navbar.Brand href="/">
          <img
            alt="AJ-TALK Logo"
            src="/aj-talk-logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <div className="justify-center">
          <p className="rights">All rights reserved © 2025 AJ Talk.</p>
          <div className="">
            <a href="/contacts">Contact</a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
