import MainFooter from "../components/Footer";
import JobsLink from "../components/JbLink";
import NavbarTop from "../components/Navbar";
import PlacementTest from "../components/PlacementTest";
import ProfileBuilder from "../components/ProfileBuilder";
import TemplateDesign from "../components/TemplateDesign";
import "../style/ResumeBuilder.css";

const ResumeBuilder = () => {
  return (
    <div>
      <NavbarTop/>
      <ProfileBuilder/>
      <TemplateDesign/>
      <JobsLink />
      <PlacementTest/>
      <MainFooter/>
    </div>
  );
};
export default ResumeBuilder;
