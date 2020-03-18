import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

/**
 * Import all page components here
 */
import LoginPage from './components/login';
import AcademyPage from './components/academy';
import SignupPage from './components/signup';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Router>

        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/academy" component={AcademyPage} />

    </Router>
);