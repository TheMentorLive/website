import { Container } from "react-bootstrap";
// import LinkedInProfile from "./LinkedIn";
import Templates from "./Templates";

const TemplateDesign = () => {
  // const Options = {
  //   one: <Templates />,
  //   two: <Templates />,
  //   three: <Templates />,
  //   four: <LinkedInProfile />,
  //   default: <Templates />,
  // };

  // const ENUM_State=({state})=>{
  //   return(
  //     <div>{Options[state]}</div>
  //   )
  // } 

  return (
    <Container style={{ marginTop: "120px", marginBottom: "150px" }}>
      <div className="template-top">
        <h3>Professionally Designed Templates</h3>
        <span>
          Choose from 50+ customizable resume templates that are built to meet
          your career needs.
        </span>
      </div>
      <div className="main-div-template">
        {/* <ENUM_State state="default"/>
        <ENUM_State state="four"/> */}
        <Templates/>
      </div>
    </Container>
  );
};

export default TemplateDesign;
