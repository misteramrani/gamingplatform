import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

/**
 * Import all page components here
 */
import LoginPage from './components/loginpage/login';
import gameDashboard from './components/gamedashboard/gamedashboard';
import game from './components/gamepage/game';
import SignupPage from './components/signuppage/signup';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Router>

        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/gamedashboard" component={gameDashboard} />
        <Route path="/game" component={game} />

    </Router>
);