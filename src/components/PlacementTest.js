import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacementTest = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  return (
    <Container className="placement-container">
      <span className="JobLink-heading">Placement Test</span>
      <p className="JobLink-heading-desc">
        Technical Tests & Interview Questions of Top MNC’s
      </p>
        <div>
          <Row style={{ marginTop: "80px", marginBottom: "70px" }} md={2}>
            <Col>
              <div className="Test-box">
                <img src="/images/apptitude.png" alt="box-radiouss" />{" "}
                <span className="JobLink-box-courseName">Applitute Test</span>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <span className="JobLink-boc-colDetails">Internship</span>
                  </Col>
                  <Col>
                    <span className="JobLink-boc-colDetails">2 Months</span>
                  </Col>
                  <Col>
                    <span className="JobLink-boc-colDetails">Remote</span>
                  </Col>
                </Row>
                <div className="card-place-text">
                  <ul>
                    <li>
                      We value greate design and prioritize it across every
                      single thing we build.
                    </li>
                    <li>
                      As a UI/UX Designer, your primary focus will be to create
                      elegant, on-brand designs.
                    </li>
                    <li>
                      You will work closely with the design team to create and
                      bring ideas to life on-brand designs. You will work
                      closely with the design team to create and bring ideas to
                      life..
                    </li>
                  </ul>
                </div>
                <Link className="JObLink-box-btn">Start Now</Link>
              </div>
            </Col>
            <Col>
              <div className="Test-box">
                <img src="/images/apptitude.png" alt="box-radiouss" />{" "}
                <span className="JobLink-box-courseName">Applitute Test</span>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <span className="JobLink-boc-colDetails">Internship</span>
                  </Col>
                  <Col>
                    <span className="JobLink-boc-colDetails">2 Months</span>
                  </Col>
                  <Col>
                    <span className="JobLink-boc-colDetails">Remote</span>
                  </Col>
                </Row>
                <div className="card-place-text">
                  <ul>
                    <li>
                      We value greate design and prioritize it across every
                      single thing we build.
                    </li>
                    <li>
                      As a UI/UX Designer, your primary focus will be to create
                      elegant, on-brand designs.
                    </li>
                    <li>
                      You will work closely with the design team to create and
                      bring ideas to life on-brand designs. You will work
                      closely with the design team to create and bring ideas to
                      life..
                    </li>
                  </ul>
                </div>
                <Link className="JObLink-box-btn">Start Now</Link>
              </div>
            </Col>
          </Row>
        </div>
    </Container>
  );
};

export default PlacementTest;
