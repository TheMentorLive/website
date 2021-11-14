import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <div className="ourBenefits-outter-box">
        <Row md={5}>
          <Col className="column-card">
            <div className="title-left">Our benefits</div>
          </Col>
          <Col className="column-card-hover">
            <div className="card-col">
              <div className="card-image">
                <img src="/images/service1.png" alt="CardIMG 1" />
              </div>
              <span>Profile Builder</span>
              <br />
              <a href="/">Learn More </a>
            </div>
          </Col>
          <Col className="column-card-hover">
            <div className="card-col">
              <div className="card-image">
                <img src="/images/service2.png" alt="CardIMG 2" />
              </div>
              <span>Career Builder</span>
              <br />
              <a href="/">Learn More </a>
            </div>
          </Col>
          <Col className="column-card-hover">
            <div className="card-col">
              <div className="card-image">
                <img src="/images/service3.png" alt="CardIMG 3" />
              </div>
              <span>Consultation</span>
              <br />
              <a href="/">Learn More </a>
            </div>
          </Col>
          <Col className="column-card-hover">
            <div className="card-col">
              <div className="card-image">
                <img src="/images/service4.png" alt="CardIMG 4" />
              </div>
              <span>Mentor Program</span>
              <br />
              <a href="/">Learn More </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
