import { Container, Row, Col } from "react-bootstrap";

const ProfileBuilder = () =>{
    return(
        <Container style={{marginTop:'100px'}} className="text-center">
            <div className="pb-heading">
                <h1>Profile Builder</h1><br/>
                <span>Build your professional profile with our professional researched and experimented layouts</span>
            </div>
            <div className="card-container-pb d-flex justify-content-center">
                <Row md={3}>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="card-container-pb d-flex justify-content-center">
                <Row md={3}>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                    <Col>
                        <div className='pb-cardname'>
                            <img src="/images/pb-card.png" alt="ard-top"/><br/>
                            <span className="pb-cardtop-heading">Resume Builder</span><br/>
                            <span className="pb-cardtop-desc">Get an Industry ready resume made by experts </span>
                            <button className="pb-button">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ProfileBuilder;