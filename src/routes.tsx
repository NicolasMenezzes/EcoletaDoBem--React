import {Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import CreatePoint from "./pages/CreatePoint"
import Check from "./pages/Check"


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/createpoint" />
            <Route component={Check} path="/check" />
            

        </BrowserRouter>
    )
}

export default Routes