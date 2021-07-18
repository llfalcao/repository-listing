import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/repository-listing" exact component={Home} />
                <Route
                    path="/repository-listing/repositories"
                    component={Repositories}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
