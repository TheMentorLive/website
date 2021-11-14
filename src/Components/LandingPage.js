import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container
      style={{ marginTop: "80px", height: "100vh" }}
    >
      <Row md={2}>
        <Col>
          <h1 className="heading-landing font-weight-bold">
            Make your future better
          </h1><br/>
          <p className="text-md-center text-heading">
            We connect you to industry professionals, for your career problems
          </p>
          <br />
          <Row md={2}>
            <Col sm={5}>
              <Link to="/" className="button-landing-left">
                Get-Started
              </Link>
            </Col>
            <Col sm={7}>
              {/* <Link href="#home" className="button-landing-right">
                Free 1:1 Consultancy
              </Link> */}
            </Col>
          </Row>
          <hr className="landing" />
          <Row md={4}>
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
        <Col className="landing_image">
          <img src="/images/landing.png" alt="Landing-Page" />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
