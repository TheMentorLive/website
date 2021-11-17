import { Container, Row, Col } from "react-bootstrap";

const CareerCards = () => {
  return (
    <Container style={{marginBottom:'100px'}} fluid className="pbcards-container d-flex justify-content-center align-items-center">
      <Row md={3}>
        <Col>
          <div className="pb-cardname">
            <img src="/images/pb-card.png" alt="ard-top" />
            <br />
            <span className="pb-cardtop-heading">Career Chooser</span>
            <br />
            <span className="pb-cardtop-desc">
              Get an Industry ready resume made by experts{" "}
            </span>
            <button className="pb-button">Learn More</button>
          </div>
        </Col>
        <Col>
          <div className="pb-cardname">
            <img src="/images/pb-card.png" alt="ard-top" />
            <br />
            <span className="pb-cardtop-heading">Skills Builder</span>
            <br />
            <span className="pb-cardtop-desc">
              Relevant Jobs links matching your Profile.
            </span>
            <button className="pb-button">Learn More</button>
          </div>
        </Col>
        <Col>
          <div className="pb-cardname">
            <img src="/images/pb-card.png" alt="ard-top" />
            <br />
            <span className="pb-cardtop-heading">Placement Preps</span>
            <br />
            <span className="pb-cardtop-desc">
              Optimise your Profile and grow your network.
            </span>
            <button className="pb-button">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerCards;
