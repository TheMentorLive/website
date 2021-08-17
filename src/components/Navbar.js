import { Navbar, Container,Nav } from "react-bootstrap";
import "../style/MainScreen.css";

const NavbarTop = () => {
  return (
    <>
      <Navbar className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
              <img src="/images/logo-white.png" alt="logo-bg-white" className="img-navbar-logo" />
          </Navbar.Brand>
          <Nav className="text-xl-center nav-item-custom">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">My Account</Nav.Link>
            <Nav.Link href="/">Profile Builder</Nav.Link>
            <Nav.Link href="/">Career</Nav.Link>
            <Nav.Link href="/">Placement</Nav.Link>
            <Nav.Link href="/">Skill</Nav.Link>
          </Nav>
          <Nav className="text-sm-right">
            <a href="#home" className="sign-in-option">Sign In</a>
            <a href="#features" className="register-option">Register</a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;