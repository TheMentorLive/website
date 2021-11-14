import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const Mentorship = () =>{
    return(
        <Container>
            <Row md={2}>
                <Col className="col-sec4">
                    <div>
                        <span className="section4-subheading">Mentors</span><br/>
                        <span className="section4-heading">Courses brought to you by the many experts</span><br/>
                        <span className="section4-desc">This is the course process you will go through if you blah blah blah subscribe your our platform.</span><br/>
                        <div style={{marginTop:'40px'}}>
                            <Link to="/" className="button-landing-left">
                                Get-Started
                                <span className="arrow-button"><BsArrowUpRight className="arrow"/></span>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col className="col-sec4">
                    <img className="img-section4" src="/images/mentorship.png" alt="mentorship" />
                </Col>
            </Row>
        </Container>
    );
}

export default Mentorship;