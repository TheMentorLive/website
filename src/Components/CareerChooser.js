import { Col, Container, Row } from "react-bootstrap";

const CareerChooser = () => {
  return (
    <Container
    >
      <div className="career-chooser-header">
          <h2>Career Chooser</h2><br/>
          <span>Choose from 50+ customizable resume templates that are built to meet your career needs</span>
      </div>
      <Row md={2}>
        <Col>
          <div className="career-chooser">
            <h1 className="career-chooser-heading">
              <span>Career</span> Builder
            </h1>
            <br />
            <span className="career-chooser-subheading">
              Build your professional profile with our professional researched
              and experimented layouts
            </span>
          </div>
          <div className="career-chooser">
            <h1 className="career-chooser-heading">
              <span>Paid</span> Consultation
            </h1>
            <br />
            <span className="career-chooser-subheading">
              Build your professional profile with our professional researched
              and experimented layouts
            </span>
          </div>
          <div className="career-chooser">
            <h1 className="career-chooser-heading">
              <span>Free 1:1</span> Consultation
            </h1>
            <br />
            <span className="career-chooser-subheading">
              Build your professional profile with our professional researched
              and experimented layouts
            </span>
          </div>
        </Col>
        <Col className="career-chooser-img">
          <img src="/images/career-chooser.png" alt="career landing page" />
        </Col>
      </Row>
    </Container>
  );
};

export default CareerChooser;
