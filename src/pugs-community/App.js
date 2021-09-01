import React from "react";
import './index.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import {MainPage} from "./MainPage";
import {Profile} from "./Profile";
import AuthHoc from "./hoc/Auth";
import EditProfileInfo from "./EditProfileInfo";

export function App() {
    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/'>
                        <MainPage />
                    </Route>
                    <Route path='/signUp'>
                        <SignUpPage />
                    </Route>
                    <Route path='/logIn'>
                        <LoginPage />
                    </Route>
                    <Route path='/profile'>
                        <AuthHoc>
                            <Profile />
                        </AuthHoc>
                    </Route>
                    <Route path='/editProfile'>
                        <EditProfileInfo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}