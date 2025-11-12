import React from "react";

const ContactInfo = () => (
  <div className="container mt-2">
    <div className="card shadow-sm mx-auto" style={{ maxWidth: 400 }}>
      <div className="card-body">
        <h2 className="card-title mb-1">Contact Us</h2>
        <p className="card-text">
          If you have any queries or concerns, please contact us. We are always here to help!
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Email:</strong> ajtalk3707@gmail.com
          </li>
          <li className="list-group-item">
            <strong>WhatsApp:</strong> +91-9687336426
          </li>
        </ul>
        <div className="text-muted" style={{ fontSize: "0.95em" }}>
          We respond to most queries within 24 hours on business days.
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
