import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register"
import Home from "../pages/Home";

import PrivateRoute from "./private-route";

function Rotas() {
   return(
        <Router>
            <Switch>
                <Route component={Login} path="/login"/>
                <Route component={Register} path="/cadastro"/>
                <PrivateRoute exact component={Home} path="/"/>
            </Switch>
        </Router>
   ) 
}

export default Rotas
