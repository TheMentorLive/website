import MainFooter from "../components/Footer";
import JobsLink from "../components/JbLink";
import NavbarTop from "../components/Navbar";
import PlacementTest from "../components/PlacementTest";
import ProfileBuilder from "../components/ProfileBuilder";
// import ProfileFooter from "../components/ProfileFooter";
import Templates from "../components/Templates";
import "../style/ResumeBuilder.css";

const ResumeBuilder = () => {
  return (
    <div>
      <NavbarTop/>
      <ProfileBuilder/>
      <Templates/>
      <JobsLink />
      <PlacementTest/>
      {/* <ProfileFooter/> */}
      <MainFooter/>
    </div>
  );
};
export default ResumeBuilder;
