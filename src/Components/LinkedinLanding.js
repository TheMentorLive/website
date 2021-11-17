import { Container } from "react-bootstrap";

const Linkedinlanding = () => {
  return (
    <Container className="text-md-center" style={{marginBottom:'50px'}}>
      <div className="linkedin-profile">
        <h2>Linkedin Profile</h2>
        <br />
        <span>
          Build your professional profile with our professional researched and
          experimented layouts
        </span>

        <img src="/images/linkedin-profile.png" alt="linkedin-profile" />
      </div>
      <div className="linkedin-theory">
        <h2>
          Stop procastinatinig and let us your professional <span>Linkedln</span> presence
          today!
        </h2>
        <span className="sub-head">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
      </div>
    </Container>
  );
};

export default Linkedinlanding;
