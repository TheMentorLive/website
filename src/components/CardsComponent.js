import React from "react";
import { Card, Button, Row, Container } from "react-bootstrap";
import { HiUserGroup, HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserTie, FaTools, FaMagic, FaCommentsDollar } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import '../style/Design.css';

function Front(){
  return(
    <Container>
      <Cads4 />
      <OurTesti />
      <Cads8 />
    </Container>
  ); 
}

function Cads4() {
  return (
    <Container>
      <br /><br /><br />
      <div class = "subTopicHighlight">
      <h2>
        <div style={{textAlign: "left"}}>
          Want a New Industry Standard Resume ?
          </div>
        <div style={{textAlign: "right"}}>
         <Button variant="primary">Click Here</Button> 
         </div>
        </h2>
      </div>
      <br /><br /><br />
      <h2>Our Services</h2>
      <br /><br /><br />
      
      <Row xs={1} md={8}>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="images/a.jpg" />
          <Card.Body>
            <Card.Title>The<div class="nameColor">Mentor</div>Program</Card.Title>
            <Card.Text>
              Get live training from industry professionals on most in demand
              skills of the industry . Enroll Today !
            </Card.Text>
            
            <Button variant="outline-primary"><a href="https://thementor.live/mentor-training-program/">Enroll Now</a>  </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="images/a.jpg" />
          <Card.Body>
            <Card.Title><div class="nameColor">Live Mock</div>  Interview</Card.Title>
            <Card.Text>
              Prepare with industry experts from FORTUNE 500 companies. Figure
              out your mistakes with interview report !
            </Card.Text>
            <Button variant="outline-primary"><a href = "https://thementor.live/interview-preparation/">Buy Now</a></Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="images/a.jpg" />
          <Card.Body>
            <Card.Title><div class="nameColor">Resume/Profile</div> Builder</Card.Title>
            <Card.Text>
              Get an ATS ready and keyword optimised resume to beat the
              competition and stand out in the competition
            </Card.Text>
            <Button variant="outline-primary"><a href ="https://thementor.live/profile-resume-builder/">Get a New Resume</a></Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="images/a.jpg" />
          <Card.Body>
            <Card.Title><div class="nameColor">Digital</div> Library</Card.Title>
            <Card.Text>
              Get all resources to prepare yourself for brighter future . All
              test series , courses and EBooks in one place .
            </Card.Text>
            <Button variant="outline-primary"><a href = "https://thementor.live/digital-library/">Learnn More</a></Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

function OurTesti(){
  return(
    <Container>
      <br /><br /><br/>
      <h2>Our Vision</h2>
      <p>The Mentor are committed to bring about a fundamental change in the way young individuals have been working towards building their careers. Our aim is to bridge the gap between the skill set of the students and the demands of the industry, connecting them to industry Professionals/the Mentor at a negligible cost.</p>
      <br/><br/><br/>
       Student Mentored Live Sessions Conducted Experts on our platform

      <br/><br/><br/>
      <h2>Testimonials</h2>


    </Container>
  );
}

function Cads8() {
  return (
    <Container>
      <br /><br /><br />
      <div class = "subTopicHighlight">
      <h2>Careers</h2>
      </div>
      <br /><br /> <br /> 
      <div>
        <Row xs={1} md={8}>
          <Card style={{ width: "14rem" }}>
            <h3>
              <HiUserGroup />
            </h3>
            <Card.Body>
              <Card.Title>Admin & HR</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/management/admin-hr/">Click here</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <FaUserTie />
            </h1>
            <Card.Body>
              <Card.Title>Management</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/management/">Click here</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <BiCodeBlock />
            </h1>
            <Card.Body>
              <Card.Title>Software/IT</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/engineering/software-it/">Click here</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <FaTools />
            </h1>
            <Card.Body>
              <Card.Title>Engineering</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/engineering/">Click here</a></Button>
            </Card.Body>
          </Card>
        </Row>

        <Row xs={1} md={8}>
          <Card style={{ width: "14rem" }}>
            <h1>
              <BsGraphUp />
            </h1>
            <Card.Body>
              <Card.Title>Business & Finance</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/management/business-finance/"> Click here </a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <HiOutlineSpeakerphone />
            </h1>
            <Card.Body>
              <Card.Title>Marketing & PR</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/management/marketing-pr/">Click here</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <FaCommentsDollar />
            </h1>
            <Card.Body>
              <Card.Title>Sales & Retail</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/sales-retail/">Click here</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "14rem" }}>
            <h1>
              <FaMagic />
            </h1>
            <Card.Body>
              <Card.Title>Creative/Design</Card.Title>
              <Button variant="outline-primary"><a href="https://thementor.live/creative-design/">Click here</a></Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </Container>
  );
}
export default Front;
