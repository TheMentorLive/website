import React from "react";
import { Col, Row } from "react-bootstrap";

function Mentors() {
  return (
    <div>
      <Row>
        <Col>
          <div className="section6-image">
            <img src="/images/Mentors1.png" alt="VideoCall Im" />
          </div>
        </Col>
        <Col>
          <div>
            <span className="section6-right-sub1">Mentors</span>
            <br />
            <p className="section6-right-sub2">
              Join the class with your mentor via video call <br />
            </p>
            <span className="section6-right-sub3">
              This is the course process you will go through if you blah
              subscribe your our platform.
            </span>
          </div>
          <div>
            <a href="/" className="section6-btn1">
              Book Now
            </a>
            <a href="/" className="section6-btn2">Read More</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mentors;
