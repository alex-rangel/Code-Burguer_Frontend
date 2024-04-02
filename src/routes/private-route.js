import React from "react";
import { Route, Redirect } from 'react-router-dom'
import { Header } from "../components";

function PrivateRoute({isAdmin ,component, ...rest}) {
    const user = localStorage.getItem('codeburguer:userData')

    if (!user) {
        return <Redirect to="/login"/>
    }

    if (isAdmin && !JSON.parse(user).admin) {
        return <Redirect to="/"/>
    }

    return (
        <>
            {!isAdmin && <Header/>}
            <Route {...rest} component={component}/>
        </>
    )
}

export default PrivateRoute