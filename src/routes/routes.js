import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register"
import Home from "../pages/Home";
import Product from "../pages/Product"

import PrivateRoute from "./private-route";

function Rotas() {
   return(
        <Router>
            <Switch>
                <Route component={Login} path="/login"/>
                <Route component={Register} path="/cadastro"/>
                <PrivateRoute exact component={Home} path="/"/>
                <PrivateRoute component={Product} path="/produtos"/>
            </Switch>
        </Router>
   ) 
}

export default Rotas
