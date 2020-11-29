import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { SetAppScreen } from '../components/setApp/SetAppScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ SetAppScreen }/>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
