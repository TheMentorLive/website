import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsLink = () => {
  return (
    <div>
      <Container className="text-md-center" style={{ marginTop: "100px",marginBottom:'80px' }}>
        <span className="JobLink-heading">Job Links</span> <br />
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
        <Link className="JobLink-Link">See all job application</Link>
      </Container>
    </div>
  );
};

export default JobsLink;
