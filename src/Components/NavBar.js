import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-custom"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-white.png"
              alt="logo-bg-white"
              className="img-navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                Career Builder
              </Link>
              <Link to="/profile" className="nav-link">
                Profile Builder
              </Link>
              <Link to="/mentor-program" className="nav-link">
                Mentor Program
              </Link>
            </Nav>
            <Nav>
              <Link to="/login" className="sign-in-option">
                Sign In
              </Link>
              <Link to="/signup" className="register-option">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-white.png"
              alt="logo-bg-white"
              className="img-navbar-logo"
            />
          </Navbar.Brand>
          <Nav className="text-xl-center nav-item-custom">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              My Account
            </Link>
            <Link to="/profile" className="nav-link">
              Profile Builder
            </Link>
            <Link to="/" className="nav-link">
              Career
            </Link>
            <Link to="/" className="nav-link">
              Placement
            </Link>
            <Link to="/" className="nav-link">
              Skill
            </Link>
          </Nav>
          <Nav className="text-sm-right">
            <Link to="/login" className="sign-in-option">
              Sign In
            </Link>
            <Link to="/signup" className="register-option">
              Register
            </Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
};

export default NavbarTop;
