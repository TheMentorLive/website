import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Templates = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      className="text-md-center"
    >
      <Modal
        show={show}
        onHide={handleClose}
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Body>
          <img src="/images/resume-template.png" alt="preview" />
        </Modal.Body>
      </Modal>
      
      <Row md={3} style={{ marginTop: "60px", marginLeft: "30px" }}>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row md={3} style={{ marginTop: "120px", marginLeft: "30px" }}>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
        <Col>
          <div className="template-card">
            <img
              src="/images/resume-template.png"
              alt="CardTopImg"
              className="Template-card-top-img"
            />
            <div class="middle">
              <button class="text" onClick={handleShow}>
                Preview Resume
              </button>
            </div>
            <div className="template-desc-div">
              <h6>Professional Resume</h6>
              <span>Rs.460</span>
            </div>
            <div className="template-bottom-div">
              <Link className="template-bottom-btn">Buy Now</Link>
            </div>
          </div>
        </Col>
      </Row>
      <div className="btn-container">
        <Link to="/templates" className="template-Link">See all templates</Link>
      </div>
    </Container>
  );
};

export default Templates;
