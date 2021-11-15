import { Col, Container, Row } from "react-bootstrap";

const MentorProgramLanding = () => {
  return (
    <Container
      style={{ height: "90vh" }} className="mentor-program"
    >
      <div>
        <h2 className="mentor-program-heading">Mentor Program</h2>
      </div>
      <Row md={2}>
        <Col className="img-alt">
          <img src="/images/mentor-program.png" alt="Mentor-Program Landing" />
        </Col>
        <Col>
          <span className="mentor-landing-subheading">
            Build your professional profile with our professional researched and
            experimented layouts
          </span>
          <br />
          <br />
          <span className="mentor-landing-subheading">
            Build your professional profile with our professional researched and
            experimented layouts
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default MentorProgramLanding;
