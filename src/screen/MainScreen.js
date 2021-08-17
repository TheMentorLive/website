import Landing from "../components/LandingPage";
import NavbarTop from "../components/Navbar";
import Services from "../components/ourServices"


const MainScreen = () =>{
    return(
        <div>   
            <NavbarTop/>
            <Landing/>
            <Services/>
        </div>
    );
}

export default MainScreen;