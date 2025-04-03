import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarC.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As technology grew and evolved, so have I and my passion for it.
              <br />
              <br />I am fluent in classics such as
              <i>
                <b className="purple"> Python, Java, Javascript, </b> & <b className="purple"> More</b>!
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies </b> & <b className="purple"> Products</b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my interests for developing products
              with <b className="purple">Node.js, </b>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; including
              <i>
                <b className="purple"> React.js </b> & <b className="purple"> Angular.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MidoOmar95"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mwomar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mohamedwomar21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
