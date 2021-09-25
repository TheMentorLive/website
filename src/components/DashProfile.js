import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashProfile = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="section-back-card1">
            <span className="section-back-card12-heading">
              Profile Completed
            </span>
            <Row>
              <Col>
                <span className="profile-update-head">Strength - </span>{" "}
                <span
                  className="profile-update-head"
                  style={{ color: "#FF7F56" }}
                >
                  Intermediate
                </span>
              </Col>
              <Col>
                <span className="section-back-card1-subheading ">
                  <img src="/images/bi.png" alt="Bi" /> &nbsp; Add profile photo
                </span>
                <br />
                <span className="section-back-card1-subheading ">
                  <img src="/images/pe.png" alt="Bi" /> &nbsp; Add few skills
                </span>
                <br />
                <span className="section-back-card1-subheading ">
                  <img src="/images/bu.png" alt="Bi" /> &nbsp; Add a short bio
                </span>
                <br />
                <span className="section-back-card1-subheading ">
                  <img src="/images/ba.png" alt="Bi" />
                  &nbsp; Add your interests
                </span>
              </Col>
              <Col>
                <Link className="section-card1-button">Add photo</Link>
                <br />
                <Link className="section-card1-button">Add skills</Link>
                <br />
                <Link className="section-card1-button">Add bio</Link>
                <br />
                <Link className="section-card1-button">Add interests</Link>
                <br />
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="section-back-card2">
            <span className="section-back-card12-heading">Community</span>
            <Row>
              <Col>
                <img src="/images/community1.png" alt="Girl1" />
              </Col>
              <Col>
                <img src="/images/community2.png" alt="Boy1" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashProfile;
