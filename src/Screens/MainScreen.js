import LandingPage from '../Components/LandingPage';
import Mentors from '../Components/Mentors';
import Mentorship from '../Components/Mentorship';
import Process from '../Components/OurProcess';
import Services from '../Components/OurServices';
import Subscription from '../Components/Subscription';
import SuccessStories from '../Components/SuccessStories';
import '../Style/MainScreen.css'

const MainScreen = () =>{
    return(
        <div>
            <LandingPage/>
            <Services/>
            <Process/>
            <Mentorship/>
            <Mentors/>
            <SuccessStories/>
            <Subscription/>
        </div>
    );
}

export default MainScreen;