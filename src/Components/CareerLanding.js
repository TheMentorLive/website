import { Col, Container, Row } from "react-bootstrap";

const CareerLanding = () => {
  return (
    <Container style={{height:'100vh'}} className="d-flex align-items-center">
      <Row md={2}>
        <Col>
          <h1 className="career-landing-heading">Career Builder</h1>
          <br />
          <span className="career-landing-subheading">
            Build your professional profile with our professional researched and
            experimented layouts
          </span>
        </Col>
        <Col>
            <img src="/images/career-landing.png" alt="career landing page" className="career-landing-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default CareerLanding;
