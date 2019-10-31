import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthService from './services/auth-service';

import AppHeader from './components/Secured/AppHeader/AppHeader'
import AppContent from './components/Secured/AppContent/AppContent'

import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Public/Login/Login.js'
import Tasks from './pages/Secured/Tasks/Tasks'

const RootRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={ (props) =>
            AuthService.logged 
                ? <Redirect to={{ pathname: "/tasks", state: { from: props.location } }} />
                : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
    />
);

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={ (props) =>
            AuthService.logged 
                ? <Redirect to={{ pathname: "/tasks", state: { from: props.location } }} />
                : <Component {...props} />
        }
    />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={ (props) =>
            AuthService.logged 
                ? <div className="animated fadeIn">
                    <AppHeader />
                    <AppContent children={<Component {...props} />}/>
                </div>
                : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <RootRoute exact path="/" />
            <PublicRoute path="/login" component={Login}/>
            <PrivateRoute path="/tasks" component={Tasks} />
            <Route path="*" component={NotFound} />
        </Switch>
    </ BrowserRouter>
);

export default Routes;