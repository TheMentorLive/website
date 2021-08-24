import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <Container fluid className="process-container">
      <Row
        md={2}
        style={{ height: "500px", marginLeft:'50px' }}
        className="d-flex align-items-center"
      >
        <Col>
          <span className="process-head">Our Process</span>
          <br />
          <span className="process-heading">
            This is the course<br/> process for you
          </span>
          <br />
          <span className="process-subheading">
            This is the course process you will go through if <br/>you subscribe your
            our platform.
          </span>
          <br />
        </Col>
        <Col className="card-bg">
          <Row md={2}>
            <Col>
              <Card className="section3-card" style={{ borderRadius: "30px" }}>
                <Card.Body>
                  <span className="number-heading">1</span>
                  <br />
                  <img src="/images/section3-img1.PNG" alt="CardImg1" />
                  <br />
                  <span className="section3-card-text">
                    Find the course you need
                  </span>
                  <br />
                  <Link to="/" className="section3-btn-text">
                    Learn More {">"}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="section3-card" style={{ borderRadius: "30px" }}>
                <Card.Body>
                  <span className="number-heading">2</span>
                  <br />
                  <img src="/images/section3-img2.PNG" alt="CardImg1" />
                  <br />
                  <span className="section3-card-text">
                    Book your course now don’t late
                  </span>
                  <br />
                  <Link to="/" className="section3-btn-text">
                    Learn More {">"}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          <div className="middle-block-back"></div>
          </Row>
          <Row md={2} style={{marginTop:'50px'}}>
            <Col>
              <Card className="section3-card" style={{ borderRadius: "30px" }}>
                <Card.Body>
                  <span className="number-heading">3</span>
                  <br />
                  <img src="/images/section3-img3.PNG" alt="CardImg1" />
                  <br />
                  <span className="section3-card-text">
                  Follow all of the course you take
                  </span>
                  <br />
                  <Link to="/" className="section3-btn-text">
                    Learn More {">"}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="section3-card" style={{ borderRadius: "30px" }}>
                <Card.Body>
                  <span className="number-heading">4</span>
                  <br />
                  <img src="/images/section3-image4.PNG" alt="CardImg1" />
                  <br />
                  <span className="section3-card-text">
                  Get your online certificate
                  </span>
                  <br />
                  <Link to="/" className="section3-btn-text">
                    Learn More {">"}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Process;
