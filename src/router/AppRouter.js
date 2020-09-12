import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { AuthRouter } from "./auth/AuthRouter";
import { DashboardRouter } from "./dashboard/DashboardRouter";

export const AppRouter = () => {


    const isLogged = false;

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLogged}
                    />

                    <PrivateRoutes
                        path="/app"
                        component={DashboardRouter}
                        isAuthenticated={isLogged}
                    />

                    <Redirect to={isLogged ? "/app/home" : "/auth/login"} />
                </Switch>
            </div>
        </Router>
    );
};
