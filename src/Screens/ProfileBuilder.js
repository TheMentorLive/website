import LandingProfile from "../Components/LandingProfile";
import Linkedin from "../Components/LinkedinProfile";
import PBCards from "../Components/PBCards";
import PortfolioWebsite from "../Components/PortfolioWebsite";
import ResumeBuilding from "../Components/ResumeBuilding";
import '../Style/ProfileBuilder.css';

const ProfileBuilder =()=>{
    return(
        <div>
            <LandingProfile/>
            <PBCards/>
            <ResumeBuilding/>
            <Linkedin/>
            <PortfolioWebsite/>
        </div>
    );
}

export default ProfileBuilder;