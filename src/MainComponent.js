import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarTop from './components/Navbar';
import MainScreen from "./screen/MainScreen"

const MainComponent = () =>{
    return(
        <div>
            <Router>
                <NavbarTop/>
                <Switch>
                    <Route exact path="/">
                        <MainScreen/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainComponent;