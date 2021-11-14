import { Container, Row, Col } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const MainFooter = () => {
  return (
    <Container className="footer-container-main">
      <Row md={4}>
        <Col md={4}>
          <div className="footer-logo">
            <img src="/images/logo-white.png" alt="logo" />
            <span>livethementor@gmail.com</span>
          </div>
          <div className="footer-social-media">
            <span>
              <FiFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className="footer-tag-list">
            <ul>
              <li>Home</li>
              <li>My Account</li>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          <div className="footer-tag-list">
            <ul>
              <li>Profile Builder</li>
              <li>Career</li>
              <li>Placement</li>
              <li>Skill Development</li>
            </ul>
          </div>
        </Col>
        <Col md={2}>
          <div className="footer-mobile">
            <span>Mobile Application</span>
          </div>
        </Col>
      </Row>
      <div className="copyright">
        <span>@ 2021, The Mentor. All rights reserved </span>
      </div>
    </Container>
  );
};

export default MainFooter;
