import JobsLink from "../components/JbLink";
import ProfileBuilder from "../components/ProfileBuilder";
import "../style/ResumeBuilder.css";

const ResumeBuilder = () => {
  return (
    <div>
      <ProfileBuilder/>
      <JobsLink />
    </div>
  );
};
export default ResumeBuilder;
