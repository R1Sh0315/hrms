import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardLayout from "./components/dashbord/Dashboard";

const Controller=()=>{
    return(
    <Router>
        <DashboardLayout>
        this is DashBoard layout
        <Switch>
            <Route/>
        </Switch>    
        </DashboardLayout>
    </Router>)
}

export default Controller;