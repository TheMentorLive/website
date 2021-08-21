import "../style/MainScreen.css";
import Landing from "../components/LandingPage";
import Mentors from "../components/Mentors";
// import Process from "../components/OurProcess";
import Mentorship from '../components/Mentorship';
import Services from "../components/OurServices"
import SuccessStories from "../components/SuccessStories";
import Subscription from "../components/Subscription";


const MainScreen = () =>{
    return(
        <div>   
            <Landing/>
            <Services/>
            {/* <Process/> */}
            <Mentorship/>
            <Mentors/>
            <SuccessStories/>
            <Subscription/>
        </div>
    );
}

export default MainScreen;