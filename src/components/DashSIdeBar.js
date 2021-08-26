import { CgProfile } from "react-icons/cg";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdPeopleOutline } from 'react-icons/md';
import { BiWallet } from "react-icons/bi";
import { RiSettings2Line } from 'react-icons/ri';
import { FiHelpCircle } from "react-icons/fi";
import { BsFileEarmarkText } from 'react-icons/bs';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div class="d-flex" id="wrapper" className="sidebar">
      <div id="sidebar-wrapper">
        <div className="dashboard">
          <Container>
            <div className="profile">
                <img src="/images/Mentors.png" alt="profileImg" />
                <br />
                <span>User Name</span>
            </div>
            <div className="icon-div">
              <Row>
                <Col>
                  <div className="icons">
                    <span className="span selected">
                      <CgProfile className="icon" />
                    </span>
                    <h6 className="icon-head">Profile</h6>
                  </div>
                </Col>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <BsFileEarmarkText className="icon" />
                    </span>
                    <h6 className="icon-head">My Product</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <RiSettings2Line className="icon" />
                    </span>
                    <h6 className="icon-head">Settings</h6>
                  </div>
                </Col>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <BiWallet className="icon" />
                    </span>
                    <h6 className="icon-head">My Wallet</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <VscFileSubmodule className="icon" />
                    </span>
                    <h6 className="icon-head">Documents</h6>
                  </div>
                </Col>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <FiHelpCircle className="icon" />
                    </span>
                    <h6 className="icon-head">Help & Support</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="icons">
                    <span className="span">
                      <MdPeopleOutline className="icon" />
                    </span>
                    <br/>
                    <h6 className="icon-head">Free 1:1 Consulation</h6>
                  </div>
                </Col>
              </Row>
            </div>
          <img src="/images/cloud.png" alt="cloud" className="cloud-section" />
          <Link className="cloud-section-btn">Upgrade to premium</Link>
          </Container>
        </div>
      </div>
      {/* <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    </div>
                </nav>
            </div> */}
    </div>
  );
};

export default SideBar;
