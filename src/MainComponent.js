import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainFooter from './Components/Footer';
import NavbarTop from './Components/NavBar';
import MainScreen from './Screens/MainScreen';
import ProfileBuilder from './Screens/ProfileBuilder';

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
                </Switch>
                <MainFooter/>
            </Router>
        </div>
    );
}

export default MainComponent;