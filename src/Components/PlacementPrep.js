import { Container, Row, Col } from "react-bootstrap";

const PlacementPrep = ()=>{
    return(
        <Container style={{marginTop:'150px'}} className="placement-prep-container">
            <div className="placement-prep-heading">
                <h2>Placement Preparation</h2><br/><br/>
                <span>Choose from 50+ customizable resume templates that are built to meet your career needs.</span>
            </div>
            <div className="placement-prep-main">
                <img src="/images/placement-prep.png" alt="Placement Prep"/>
                <br/>
                <span>Mentors</span>
                <h3>Get your <span>Dream</span> Job!!</h3>
            </div>
            <Row md={3}>
                <Col className="placement-prep-col" md={4}>
                    <h2><span>Technical</span> Tests</h2>
                    <span>Discover the platform that gives you the freedom to create, design, manage and develop your web presence </span>
                </Col>
                <Col className="placement-prep-col" md={4}>
                    <h2><span>Interview</span> Prep</h2>
                    <span>Discover the platform that gives you the freedom to create, design, manage and develop your web presence </span>
                </Col>
                <Col className="placement-prep-col" md={4}>
                    <h2><span>Job</span> Links</h2>
                    <span>Discover the platform that gives you the freedom to create, design, manage and develop your web presence </span>
                </Col>
            </Row>
        </Container>
    );
}

export default PlacementPrep;