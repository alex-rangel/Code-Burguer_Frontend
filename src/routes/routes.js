import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register"
import Home from "../pages/Home";
import Product from "../pages/Product"
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";

import PrivateRoute from "./private-route";
import paths from "../Constants/paths";

function Rotas() {
   return(
        <Router>
            <Switch>
                <Route component={Login} path="/login"/>
                <Route component={Register} path="/cadastro"/>
                <PrivateRoute exact component={Home} path="/"/>
                <PrivateRoute component={Product} path="/produtos"/>
                <PrivateRoute component={Cart} path="/carrinho"/>
                <PrivateRoute component={Admin} path={paths.Order} isAdmin/>
                <PrivateRoute component={Admin} path={paths.Products} isAdmin/>
                <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin/>
                <PrivateRoute component={Admin} path={paths.NewCategory} isAdmin/>
                <PrivateRoute component={Admin} path={paths.ListUsers} isAdmin/>
                <PrivateRoute component={Admin} path={paths.UpdateProduct} isAdmin/>
            </Switch>
        </Router>
   ) 
}

export default Rotas
