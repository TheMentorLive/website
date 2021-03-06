import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class JobsLink extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };

  render() {
    const settings = {
      data: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };

    return (
      <Container
        className="text-md-center"
        style={{ marginTop: "100px", marginBottom: "80px" }}
      >
        <span className="JobLink-heading"> Job Links </span> <br />
        <span className="JobLink-heading-desc">
          Choose from 50 + customizable resume templates that are built to meet
          your career needs.
        </span>
        <br />
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="joblink-outer d-flex align-items-center">
            <Row>
              <Col>
                <div className="JobLink-box">
                  <img
                    src="images/amazon.png"
                    className="JobLink-box-topImg"
                    alt="Amazon"
                  />
                  <br />
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <Row style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">Remote</span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
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
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <br />
                  <Row style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails"> Remote </span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
                  </p>
                  <br />
                  <Link className="JObLink-box-btn"> Apply Now </Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="joblink-outer d-flex align-items-center">
            <Row md={2}>
              <Col>
                <div className="JobLink-box">
                  <img
                    src="images/amazon.png"
                    className="JobLink-box-topImg"
                    alt="Amazon"
                  />
                  <br />
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <Row md={3} style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails"> Remote </span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
                  </p>
                  <br />
                  <Link className="JObLink-box-btn"> Apply Now </Link>
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
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <br />
                  <Row style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails"> Remote </span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
                  </p>
                  <br />
                  <Link className="JObLink-box-btn"> Apply Now </Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="joblink-outer d-flex align-items-center">
            <Row md={2}>
              <Col>
                <div className="JobLink-box">
                  <img
                    src="images/amazon.png"
                    className="JobLink-box-topImg"
                    alt="Amazon"
                  />
                  <br />
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <Row style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails"> Remote </span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
                  </p>
                  <br />
                  <Link className="JObLink-box-btn"> Apply Now </Link>
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
                  <span className="JobLink-box-companyName"> Amazon </span>
                  <br />
                  <span className="JobLink-box-courseName">
                    UI / UX Designer
                  </span>
                  <br />
                  <Row style={{ marginTop: "20px" }}>
                    <Col>
                      <span className="JobLink-boc-colDetails">Internship</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails">2-Month</span>
                    </Col>
                    <Col>
                      <span className="JobLink-boc-colDetails"> Remote </span>
                    </Col>
                  </Row>
                  <p className="JobLink-box-content">
                    We value great design and prioritize it across every single
                    thing we build.As a UI / UX Designer, your primary focus
                    will be to create elegant, on - brand designs.You will work
                    closely with the design team to create and bring ideas to
                    life.
                  </p>
                  <br />
                  <Link className="JObLink-box-btn"> Apply Now </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
        <input
          onChange={(e) => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
          style={{ marginTop: "40px" }}
        />
        <div className="btn-container">
          <Link to="/jobs" className="JobLink-Link">See all job application</Link>
        </div>
      </Container>
    );
  }
}

export default JobsLink;
