import MentorProgramLanding from '../Components/MentorProgram';
import MentorCards from '../Components/MentorCards';
import Linkedin from '../Components/LinkedinProfile';
import PortfolioWebsite from '../Components/PortfolioWebsite';
import AllTemplates from '../Components/AllTemplates'; 
import '../Style/MentorProgram.css';

const MentorProgram=()=>{
    return(
        <div>
            <MentorProgramLanding/>
            <MentorCards/>
            <AllTemplates/>
            <Linkedin/>
            <PortfolioWebsite/>
        </div>
    );
}

export default MentorProgram;