import { Col, Container, Row } from "react-bootstrap";
import "../style/MainScreen.css";

const Mentors = () => {
  return (
    <Container fluid className="section6">
      <Row md={2}>
        <Col className="section6-image"></Col>
        <Col className="col-mentor-custom">
          <div>
            <span className="section6-right-sub1">Mentors</span>
            <br />
            <p className="section6-right-sub2">
              Join the class with your mentor via video call
            </p>
            <span className="section6-right-sub3">
              This is the course process you will go through if you blah
              subscribe your our platform.
            </span>
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mentors;
