import { Container, Card, Row } from "react-bootstrap";
import '../style/MainScreen.css';

const Services = () => {
  return (
    <section>
      <Container>
          <h1 className="service-heading">Our Services</h1>
          <hr className="service-hr" />
          <Row xs={1} md={8} >  
            <Card style={{ width: "240px", borderRadius:'17px' }} className="service-card">
                <span className="service-img">
                    <img src="/images/mentor.png" alt="mentor"/>
                </span>
                <Card.Body>
                    <Card.Title className="service-card-head">
                        The <span className="nameColor">Mentor</span> <br/>Program
                    </Card.Title>
                    <hr className="card-body-hr"/>
                    <p className="service-card-text">Get live training from industry professionals on most in demand skills of the industry. Enroll Today !</p>
                    <button className="btn-card-service" href="https://thementor.live/mentor-training-program/">
                        Enroll Now
                    </button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: "240px", borderRadius:'17px' }} className="service-card">
                <span className="service-img">
                    <img src="/images/mock.png" alt="mentor"/>
                </span>
                <Card.Body>
                    <Card.Title>
                        <span class="nameColor">Live Mock</span> <br/>Interview
                    </Card.Title>
                    <hr className="card-body-hr"/>
                    <p className="service-card-text">Prepare with industry experts from FORTUNE 500 companies. Figure out your mistakes with interview report !</p>
                    <button className="btn-card-service" href="https://thementor.live/interview-preparation/">
                        Buy Now
                    </button>
                </Card.Body>
            </Card>
        
            <Card style={{ width: "240px", borderRadius:'17px' }} className="service-card">
                <span className="service-img">
                    <img src="/images/Resume.png" alt="mentor"/>
                </span>
                <Card.Body>
                    <Card.Title>
                        <span class="nameColor">Resume/Profile</span> <br/>Builder
                    </Card.Title>
                    <hr className="card-body-hr"/>
                    <p className="service-card-text">Get an ATS ready and keyword optimised resume to beat the competition and stand out in the competition</p>
                    <button className="btn-card-service" href="https://thementor.live/profile-resume-builder/">
                        Get A New Resume
                    </button>
                </Card.Body>
            </Card>
        
            <Card style={{ width: "240px", borderRadius:'17px' }} className="service-card">
                <span className="service-img">
                    <img src="/images/digital.png" alt="mentor"/>
                </span>
                <Card.Body>
                    <Card.Title>
                        <span class="nameColor">Digital</span> <br/>Library
                    </Card.Title>
                    <hr className="card-body-hr"/>
                    <p className="service-card-text">Get all resources to prepare yourself for brighter future . All test series , courses and EBooks in one place .</p>
                    <button className="btn-card-service" href="https://thementor.live/digital-library/">
                        Learn More
                    </button>
                </Card.Body>
            </Card>
          </Row>
      </Container>
    </section>
  );
};

export default Services;