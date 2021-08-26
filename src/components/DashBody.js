import { Col, Container, Row } from "react-bootstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
const Dashboard = () => {
  return (
    <Container>
      <div className="section-heyuser">Hi, User!</div>
      <div className="section-2ndline">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div className="section-back-color">
        <div className="section-heading">Dashboard</div>
        <Row>
          <Col>
            <div className="section-block">
              <Row md={2}>
                <Col md={4}>
                  <AiFillCheckCircle className="section-block-icon" />
                </Col>
                <Col md={8} style={{ textAlign: "right" }}>
                  <span className="section-block-heading">
                    Interview Sechduled
                  </span>
                  <br />
                  <span className="section-block-number">02</span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div className="section-block">
              <Row md={2}>
                <Col md={4}>
                  <AiFillCheckCircle className="section-block-icon" />
                </Col>
                <Col md={8} style={{ textAlign: "right" }}>
                  <span className="section-block-heading">
                    Application Send
                  </span>
                  <br />
                  <span className="section-block-number">42</span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div className="section-block">
              <Row md={2}>
                <Col md={4}>
                  <AiFillCloseCircle
                    className="section-block-icon"
                    style={{ color: "#FFA6A6" }}
                  />
                </Col>
                <Col md={8} style={{ textAlign: "right" }}>
                  <span
                    className="section-block-heading"
                    style={{ color: "#FFA6A6" }}
                  >
                    Application Rejected
                  </span>
                  <br />
                  <span
                    className="section-block-number"
                    style={{ color: "#FFA6A6" }}
                  >
                    24
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <div className="section-block">
              <Row md={2}>
                <Col md={4}>
                  <AiFillCheckCircle className="section-block-icon" />
                </Col>
                <Col md={8} style={{ textAlign: "right" }}>
                  <span className="section-block-heading">Profile Viewed</span>
                  <br />
                  <span className="section-block-number">20,120</span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="section-back-card12">
          <span className="section-back-card12-heading">Profile Completed</span>
          <Row>
            <Col><img src="" alt="durbin"/></Col>
            <Col><span className="section-back-card1-subheading ">Add profile photo</span></Col>
            <Col>button</Col>
          </Row>
        </div>
        <div className="section-back-card12">
          <spna className="section-back-card12-heading">Community</spna>
          <Row>
            <Col>
              <img src="" alt="Girl1" />
            </Col>
            <Col>
              <img src="" alt="Boy1" />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
