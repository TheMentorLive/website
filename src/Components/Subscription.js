import { Row, Container } from "react-bootstrap";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Subscription = () => {
  let iconStyles = { color: "blue", fontSize: "1.5rem" };
  let iconStylesRed = { color: "red", fontSize: "1.5rem" };

  return (
    <Container style={{ marginBottom: "100px" }}>
      <p className="section8-heading">Subscribe</p>
      <b>
        <p className="section8-sub-heading">
          Join Us and improve
          <br />
          your skills{" "}
        </p>
      </b>
      <Row md={5} className="d-flex justify-content-center">
        <div className="sec8-card-custom" style={{ width: "320px" }}>
          <div className="section8-card-img">
            <img src="images/Image_blue.png" alt="Gallery1" />
            <span className="section8-card-heading">Basic</span>
          </div>
          <div className="section8-card-content">
            <IoMdCheckboxOutline style={iconStyles} />
            <span>30 courses + bonus</span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Life time access</span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Certificate</span>
            <br />
            <MdClose style={iconStylesRed} />
            <span>Video call with mentor</span>
            <br />
            <MdClose style={iconStylesRed} />
            <span>Group consultation</span>
            <br />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" className="button-subscription-left">
                Join Now
              </Link>
              <p className="button-subscription-right">$200/Month</p>
            </div>
          </div>
        </div>

        <div className="sec8-card-custom" style={{ width: "320px" }}>
          <div className="section8-card-img">
            <img src="images/Image_White.png" alt="Gallery1" />
            <span className="section8-card-heading">Preminum</span>
          </div>
          <div className="section8-card-content">
            <IoMdCheckboxOutline style={iconStyles} />
            <span>30 courses + bonus </span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Life time access </span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Certificate </span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Video call with mentor</span>
            <br />
            <IoMdCheckboxOutline style={iconStyles} />
            <span>Group consultation </span>
            <br />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" className="button-subscription-left">
                Join Now
              </Link>
              <p className="button-subscription-right">$800/Month</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default Subscription;
