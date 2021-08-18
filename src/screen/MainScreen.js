import Landing from "../components/LandingPage";
import Mentors from "../components/Mentors";
import Services from "../components/ourServices"
import SuccessStories from "../components/SuccessStories";


const MainScreen = () =>{
    return(
        <div>   
            <Landing/>
            <Services/>
            <Mentors/>
            <SuccessStories/>
        </div>
    );
}

export default MainScreen;