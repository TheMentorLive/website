import { Col, Container, Row } from "react-bootstrap";

const LandingProfile=()=>{
    return(
        <Container>
            <Row md={2} className="d-flex align-items-center" style={{height:'100vh'}}>
                <Col>
                    <span className="profile-heading">Profile Builder</span><br/>
                    <span className="profile-subheading">Build your professional profile with our professional researched and experimented layouts</span>
                </Col>
                <Col>
                    <img src="/images/profile-landing.png" alt="Profile Builder Landing" className="profile-builder-img" />
                </Col>
            </Row>
        </Container>
    );
}

export default LandingProfile;