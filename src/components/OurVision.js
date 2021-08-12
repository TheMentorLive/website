import { Container, Row, Col} from 'react-bootstrap';

const Vision = () => {
  return (
    <Container>
      <h2>Our Vision</h2>
      <hr className="service-hr"/>
      <div className="vision-data">
        <p>The Mentor are committed to bring about a fundamental change in the way young individuals have been working towards building their careers. Our aim is to bridge the gap between the skill set of the students and the demands of the industry, connecting them to industry Professionals/the Mentor at a negligible cost.</p>
      </div>
        <Row style={{marginBottom:'50px'}}>
            <Col>
                <div className="counter">50</div>
                <div className="vision-head">Students Mentored</div>
            </Col>
            <Col>
                <div className="counter">30</div>
                <div className="vision-head">Live Session Conducted</div>
            </Col>
            <Col>
                <div className="counter">50</div>
                <div className="vision-head">Experts on our platform</div>
            </Col>
        </Row>
    </Container>
  );
};

export default Vision;