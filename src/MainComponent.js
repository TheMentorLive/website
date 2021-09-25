import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllJobs from './components/AllJobLinks';
import AllTemplates from './components/AllTemplates';
import DashBoard from './screen/DashBoard';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import MainScreen from "./screen/MainScreen"
import ResumeBuilder from './screen/ResumeBuilder';

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
                    <Route exact path="/profile">
                        <ResumeBuilder/>
                    </Route>
                    <Route exact path="/templates">
                        <AllTemplates/>
                    </Route>
                    <Route exact path="/jobs">
                        <AllJobs/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainComponent;