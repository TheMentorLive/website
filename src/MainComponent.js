import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './screen/DashBoard';
import MainScreen from "./screen/MainScreen"

const MainComponent = () =>{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainScreen/>
                    </Route>
                    <Route exact path="/dashboard">
                        <DashBoard/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainComponent;