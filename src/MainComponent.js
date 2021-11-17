import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainFooter from './Components/Footer';
import NavbarTop from './Components/NavBar';
import MainScreen from './Screens/MainScreen';
import ProfileBuilder from './Screens/ProfileBuilder';
import MentorProgram from './Screens/MentorProgram';
import CareerBuilder from './Screens/CareerBuilder';
import LinkedinPage  from './Screens/LinkedinPageScreen';

const MainComponent = () =>{
    return(
        <div>
            <Router>
                <NavbarTop/>
                <Switch>
                    <Route exact path="/">
                        <MainScreen/>
                    </Route>
                    <Route exact path="/profile">
                        <ProfileBuilder/>
                    </Route>
                    <Route exact path="/mentor-program">
                        <MentorProgram/>
                    </Route>
                    <Route exact path="/career">
                        <CareerBuilder/>
                    </Route>
                    <Route exact path="/linkedin">
                        <LinkedinPage/>
                    </Route>
                </Switch>
                <MainFooter/>
            </Router>
        </div>
    );
}

export default MainComponent;