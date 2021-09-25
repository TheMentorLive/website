import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkedInProfile = () => {
  return (
    <Container className="text-md-center" style={{ marginTop: "60px" }}>
      <div className="profile-contain">
        <img src="/images/linkedin-profile.png" alt="linkedin" />
        <h3>Stop procastinatinig and let us your professional <span>Linkedln</span> presence today!</h3>
        <span className="sub-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
        <Link to="/" className="link">Read More</Link>
      </div>
    </Container>
  );
};

export default LinkedInProfile;
