import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Linkedin = () => {
  return (
    <Container fluid style={{marginTop:'150px',marginBottom:'70px'}}>
      <div className="section3-heading">
        <h2>Linkedin Profile Building</h2>
        <br />
        <span>
          Choose from 50+ customizable resume templates that are built to meet
          your career needs.
        </span>
      </div>
      <Row md={2}>
        <Col>
          <div className="section4-resume-img"></div>
        </Col>
        <Col>
          <span className="section6-right-sub1">Mentors</span>
          <br />
          <p className="section6-right-sub2">
            Stop procastinating and let’s your build professional{" "}
            <span>Linkedln</span> presence today!
          </p>
          <span className="section6-right-sub3">
            This is the course process you will go through if you blah subscribe
            your our platform.
          </span>
          <br />
          <Row md={2} style={{ marginTop: "40px" }}>
            <Col>
              <Link to="/" className="button-landing-left">
                Book now
              </Link>
            </Col>
            <Col>
              <Link href="#home" className="button-landing-right">
                Read More
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Linkedin;
