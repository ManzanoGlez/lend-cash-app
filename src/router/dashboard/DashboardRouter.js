import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from '../../components/Dashboard/NavBar';
import { DashboardScreen } from '../../screens/dashboard/DashboardScreen';
import { UserScreen } from '../../screens/User/UserScreen';
 
export const DashboardRouter = () => {

 
    return (
        <Fragment>
            <NavBar />
            <div className="dashboard__main">
                <Container>
                    <Switch>
                        <Route path="/app/home" component={DashboardScreen} />

                        <Route path="/app/users" component={UserScreen} />

                        <Redirect to="/app/home" />
                    </Switch>
                </Container>
            </div>
        </Fragment>
    );
}
