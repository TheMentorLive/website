import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarTop from './components/Navbar';
import DashBoard from './screen/DashBoard';
import MainScreen from "./screen/MainScreen"
import ResumeBuilder from './screen/ResumeBuilder';

const MainComponent = () =>{
    return(
        <div>
            <Router>
                <NavbarTop/>
                <Switch>
                    <Route exact path="/">
                        <MainScreen/>
                    </Route>
                    <Route exact path="/dashboard">
                        <DashBoard/>
                    </Route>
                    <Route exact path="/profile">
                        <ResumeBuilder/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainComponent;