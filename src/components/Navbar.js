import { Navbar, Container,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavbarTop = () => {
  return (
    <>
      <Navbar className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
              <img src="/images/logo-white.png" alt="logo-bg-white" className="img-navbar-logo" />
          </Navbar.Brand>
          <Nav className="text-xl-center nav-item-custom">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">My Account</Link>
            <Link to="/" className="nav-link">Profile Builder</Link>
            <Link to="/" className="nav-link">Career</Link>
            <Link to="/" className="nav-link">Placement</Link>
            <Link to="/" className="nav-link">Skill</Link>
          </Nav>
          <Nav className="text-sm-right">
            <Link to="/" className="sign-in-option">Sign In</Link>
            <Link to="/" className="register-option">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;