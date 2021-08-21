import { Row, Col, Container } from "react-bootstrap";
import { AiOutlineCheckSquare, AiOutlineClose } from "react-icons/ai";

function Subscription() {
  return (
    <Container>
      <p className="section8-heading">Subscribe</p>
      <b>
        <p className="section8-sub-heading">Join Us and improve </p>
      </b>
      <br></br>
      <div>
        <Row md={2}>
          <Col>
            <img src="images/Image_blue.png" alt="Gallery1" />
            <span className="section8-card-heading">Basic</span>
            <div>
              <AiOutlineCheckSquare />
              <span className="section8-card-content">30 courses + bonus</span><br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">Life time access</span><br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">Certificate</span><br />
              <AiOutlineClose />
              <span className="section8-card-content">
                Video call with mentor
              </span><br />
              <AiOutlineClose />
              <span className="section8-card-content">Group consultation</span>
              <br />
            </div>
          </Col>
          <Col>
            <img src="images/Image_White.png" alt="Gallery1" />
            <span className="section8-card-heading">Preminum</span>
            <div>
              <AiOutlineCheckSquare />
              <span className="section8-card-content">30 courses + bonus </span>
              <br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">Life time access </span>
              <br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">Certificate </span>
              <br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">
                Video call with mentor{" "}
              </span>
              <br />
              <AiOutlineCheckSquare />
              <span className="section8-card-content">Group consultation </span>
              <br />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Subscription;
