import React, {useState} from 'react'; 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardLayout from "./components/dashbord/Dashboard";
import Home from "./screen/home/Home";
import Recruitment from "./screen/recruitment/Recruitment";
import Login from "./components/log/login/login";

const Controller=()=>{
    const [isloggedIn, setIsLoggedIn]=useState(false);
    return(
    <Router>        
    {console.log(isloggedIn)}
        <Switch>
            <Route path="/login" render={(props)=> <Login {...props} />} />
            <DashboardLayout >
                <Route exact path="/" render={(props)=><Home {...props} isloggedIn={isloggedIn} />} />
                <Route path="/recruitment" render={(props)=><Recruitment {...props} />} />
            </DashboardLayout>
        </Switch>
    </Router>)
}

export default Controller;