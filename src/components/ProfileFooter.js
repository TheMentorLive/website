import { Container } from "react-bootstrap";

const ProfileFooter = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{marginTop:'250px'}}>
      <div className="rect-box">
        <img src="/images/Rectangle 374 (2).png" alt="" />
        <div className="circle">
          <img src="/images/Ellipse 193 (2).png" alt="" />
        </div>
        <div className="small-box">
          <img src="/images/Rectangle 375 (1).png" alt="" />
          <span className="consultancy">1:1 Consultancy</span>
          <span className="prof">With Professionals</span>
          <div className="button">
            <button>Connect Now</button>
          </div>
        </div>
        <div className="boy-girl">
          <img src="/images/technology 2.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ProfileFooter;
