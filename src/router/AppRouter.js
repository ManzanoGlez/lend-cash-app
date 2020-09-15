import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { LoadingApp } from "../components/LoadingApp";
import { startRenew } from "../redux/actions/auth";
import { AuthRouter } from "./auth/AuthRouter";
import { DashboardRouter } from "./dashboard/DashboardRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const { user, checking } = useSelector((state) => state.auth);

    const isLogged = !!user;

    useEffect(() => {
        let intervalChecking = null;

        if (checking) {
            dispatch(startRenew());
        }

        intervalChecking = setInterval(() => {
            dispatch(startRenew());
        }, 1000 * 60 * 60); // 1hr every hour

        return () => {
            if (intervalChecking) {
                clearInterval(intervalChecking);
            }
        };
    });

    if (checking) {
        return <LoadingApp />;
    }

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

                <LoadingApp />
            </div>
        </Router>
    );
};
