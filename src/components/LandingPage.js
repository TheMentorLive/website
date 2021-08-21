import { Container, Row, Col } from "react-bootstrap";
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container
      style={{ marginTop: "110px", height: "100vh" }}
      className="text-center"
    >
      <Row>
        <Col>
          <img src="/images/landing-left.png" alt="Landing-Page-Left" />
        </Col>
        <Col>
          <h1 className="heading-landing font-weight-bold">Make your future better</h1>
          <p className="text-md-center text-heading">
            We connect you to industry professionals, for your career problems
          </p>
          <br />
          <Link to="/" className="button-landing-left">
            Get-Started
            <span className="arrow-button"><BsArrowUpRight className="arrow"/></span>
          </Link>
          <Link href="#home" className="button-landing-right">
            Free 1:1 Consultancy
          </Link>
          <hr className="landing" />
          <Row>
            <Col>
              <img
                className="img-logo-landing"
                src="/images/microsoft-logo.png"
                alt="Microsoft-Logo"
              />
            </Col>
            <Col>
              <img
                className="img-logo-landing"
                src="/images/google-logo.png"
                alt="Google-Logo"
              />
            </Col>
            <Col>
              <img
                className="img-logo-landing"
                src="/images/coursera-logo.png"
                alt="Coursera-Logo"
              />
            </Col>
            <Col>
              <img
                className="img-logo-landing"
                src="/images/udemy-logo.png"
                alt="Udemy-Logo"
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <img src="/images/landing-right.png" alt="Landing-Page-right" />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
