import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "../components/DashBody";
import SideBar from "../components/DashSIdeBar";
import "../style/DashBoard.css";

const DashBoard = () => {
  return (
    <Container fluid>
      <Row md={2}>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={9}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
