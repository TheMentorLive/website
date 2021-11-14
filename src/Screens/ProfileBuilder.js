import LandingProfile from "../Components/LandingProfile";
import PBCards from "../Components/PBCards";
import ResumeBuilding from "../Components/ResumeBuilding";
import '../Style/ProfileBuilder.css';

const ProfileBuilder =()=>{
    return(
        <div>
            <LandingProfile/>
            <PBCards/>
            <ResumeBuilding/>
        </div>
    );
}

export default ProfileBuilder;