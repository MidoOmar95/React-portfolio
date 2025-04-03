import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple">Mohamed Omar.</span>
            <br />
            I am currently employed as a Software Engineer at <span className="purple">J.P. Morgan Chase & Co.</span>
            <br />
            I have graduated with a BSc in Computer Science & Engineering at the 
            <span className="purple"> German University in Cairo.</span>
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            Click on a Language/Tool/Certificate to learn more!{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
