import { Container, Row, Card } from "react-bootstrap";
import { HiUserGroup, HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserTie, FaTools, FaMagic, FaCommentsDollar } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

const Career = () => {
  return (
    <div>
      <div class="subTopicHighlight">
        <h2>Careers</h2>
      </div>
      <Container>
        <Row>
          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <HiUserGroup />
            </div>
            <Card.Body>
              <span className="career-head">Admin & HR</span>
              <button
                className="btn-career"
                href="https://thementor.live/management/admin-hr/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <FaUserTie />
            </div>
            <Card.Body>
              <span className="career-head">Management</span>
              <button
                className="btn-career"
                href="https://thementor.live/management/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <BiCodeBlock />
            </div>
            <Card.Body>
              <span className="career-head">Software/IT</span>
              <button
                className="btn-career"
                href="https://thementor.live/engineering/software-it/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <FaTools />
            </div>
            <Card.Body>
              <span className="career-head">Engineering</span>
              <button
                className="btn-career"
                href="https://thementor.live/engineering/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <BsGraphUp />
            </div>
            <Card.Body>
              <span className="career-head">Business & Finance</span>
              <button
                className="btn-career"
                href="https://thementor.live/management/business-finance/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <HiOutlineSpeakerphone />
            </div>
            <Card.Body>
              <span className="career-head">Marketing & PR</span>
              <button className="btn-career" href="https://thementor.live/management/marketing-pr/">
                  Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <FaCommentsDollar />
            </div>
            <Card.Body>
              <span className="career-head">Sales & Retail</span>
              <button
                className="btn-career"
                href="https://thementor.live/sales-retail/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "16rem", borderRadius: "20px" }}
            className="career-card"
          >
            <div className="career-icon">
              <FaMagic />
            </div>
            <Card.Body>
              <span className="career-head">Creative/Design</span>
              <button
                className="btn-career"
                href="https://thementor.live/creative-design/"
              >
                Click here
              </button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Career;
