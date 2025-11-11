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
          <div className="">
            <p className="rights">All rights reserved © 2025 AJ Talk.</p>
            <div>
              <div className="rights">
                Email:
                <a
                  href="mailto:support@ajtalk.com"
                  className="text-decoration-none text-info"
                >
                  &nbsp; ajtalk3707@gmail.com
                </a>{" "}
                &nbsp; Whatsapp No:
                <a
                  href="tel:+919876543210"
                  className="text-decoration-none text-info"
                >
                  &nbsp; +91 96873 36426
                </a>
              </div>
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
