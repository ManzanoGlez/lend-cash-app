import React from 'react'
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from '../../screens/auth/LoginScreen';
import { RegisterScreen } from '../../screens/auth/RegisterScreen';
 

export const AuthRouter = () => {
    return (
      <div className="auth__main">
            <div className="auth__box-container">
                <Container>
                    <Switch>
                        <Route path="/auth/login" component={LoginScreen} />

                        <Route
                            path="/auth/register"
                            component={RegisterScreen}
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </Container>
            </div>
      </div>
    );
}
