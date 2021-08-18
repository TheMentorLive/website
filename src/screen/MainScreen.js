import Landing from "../components/LandingPage";
import Mentors from "../components/Mentors";
import NavbarTop from "../components/Navbar";
import Services from "../components/ourServices";


const MainScreen = () =>{
    return(
        <div>   
            <NavbarTop/>
            <Landing/>
            <Services/>
            <Mentors />
        </div>
    );
}

export default MainScreen;