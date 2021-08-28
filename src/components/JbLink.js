import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsLink = () => {
  return (
    <div>
      <Container className="text-md-center">
        <spna className="JobLink-heading">Job Links</spna> <br />
        <span className="JobLink-heading-desc">
          Choose from 50+ customizable resume templates that are built to meet
          your career needs.
        </span>
        <br />
        <div className="JobLink-outterbox">
          <Row md={2}>
            <Col>
              <div className="JobLink-box">
                <img
                  src="images/amazon.png"
                  className="JobLink-box-topImg"
                  alt="Amazon"
                />
                <br />
                <span className="JobLink-box-companyName">Amazon</span> <br />
                <span className="JobLink-box-courseName">UI/UX Designer</span>
                <br />
                <Row>
                  <Col className="JobLink-boc-colDetails">Internship</Col>
                  <Col className="JobLink-boc-colDetails">2 months</Col>
                  <Col className="JobLink-boc-colDetails">Remote</Col>
                </Row>
                <p className="JobLink-box-content">
                  We value great design and prioritize it across every single
                  thing we build. As a UI/UX Designer, your primary focus will
                  be to create elegant, on-brand designs. You will work closely
                  with the design team to create and bring ideas to life.
                </p>
                <br />
                <Link className="JObLink-box-btn">Apply Now</Link>
              </div>
            </Col>
            <Col>
              <div className="JobLink-box">
                <img
                  src="images/amazon.png"
                  className="JobLink-box-topImg"
                  alt="Amazon"
                />
                <br />
                <span className="JobLink-box-companyName">Amazon</span> <br />
                <span className="JobLink-box-courseName">UI/UX Designer</span>
                <br />
                <Row>
                  <Col className="JobLink-boc-colDetails">Internship</Col>
                  <Col className="JobLink-boc-colDetails">2 months</Col>
                  <Col className="JobLink-boc-colDetails">Remote</Col>
                </Row>
                <p className="JobLink-box-content">
                  We value great design and prioritize it across every single
                  thing we build. As a UI/UX Designer, your primary focus will
                  be to create elegant, on-brand designs. You will work closely
                  with the design team to create and bring ideas to life.
                </p>
                <br />
                <Link className="JObLink-box-btn">Apply Now</Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="JobLink-box">
                <img
                  src="images/amazon.png"
                  className="JobLink-box-topImg"
                  alt="Amazon"
                />
                <br />
                <span className="JobLink-box-companyName">Amazon</span> <br />
                <span className="JobLink-box-courseName">UI/UX Designer</span>
                <br />
                <Row>
                  <Col className="JobLink-boc-colDetails">Internship</Col>
                  <Col className="JobLink-boc-colDetails">2 months</Col>
                  <Col className="JobLink-boc-colDetails">Remote</Col>
                </Row>
                <p className="JobLink-box-content">
                  We value great design and prioritize it across every single
                  thing we build. As a UI/UX Designer, your primary focus will
                  be to create elegant, on-brand designs. You will work closely
                  with the design team to create and bring ideas to life.
                </p>
                <br />
                <Link className="JObLink-box-btn">Apply Now</Link>
              </div>
            </Col>
            <Col>
              <div className="JobLink-box">
                <img
                  src="images/amazon.png"
                  className="JobLink-box-topImg"
                  alt="Amazon"
                />
                <br />
                <span className="JobLink-box-companyName">Amazon</span> <br />
                <span className="JobLink-box-courseName">
                  UI/UX Designer <br />
                </span>
                <br />
                <Row>
                  <Col className="JobLink-boc-colDetails">Internship</Col>
                  <Col className="JobLink-boc-colDetails">2 months</Col>
                  <Col className="JobLink-boc-colDetails">Remote</Col>
                </Row>
                <p className="JobLink-box-content">
                  We value great design and prioritize it across every single
                  thing we build. As a UI/UX Designer, your primary focus will
                  be to create elegant, on-brand designs. You will work closely
                  with the design team to create and bring ideas to life.
                </p>
                <br />
                <Link className="JObLink-box-btn">Apply Now</Link>
              </div>
            </Col>
          </Row>
        </div>
        <Link className="JobLink-Link">See all job appliaction</Link>
      </Container>
    </div>
  );
};

export default JobsLink;
