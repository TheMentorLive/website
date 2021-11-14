import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResumeBuilding = () => {
  return (
    <Container className="section3-resume">
      <div className="section3-heading">
        <h2>Resume Building</h2>
        <br />
        <span>
          Choose from 50+ customizable resume templates that are built to meet
          your career needs.
        </span>
      </div>
      <Row md={2}>
        <Col>
          <span className="section6-right-sub1">Mentors</span>
          <br />
          <p className="section6-right-sub2">
            Create Your <span>Portfolio</span> Website
          </p>
          <span className="section6-right-sub3">
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
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
        <Col>
          <div className="section3-resume-img"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeBuilding;
