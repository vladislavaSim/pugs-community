import React from 'react';
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";

const AuthHoc = (props) => {
    const {
        children,
    } = props;
    const isLoggedIn = useSelector((state) => state.logInReducer).username;
    const isSignedUp = useSelector((state) => state.signUpReducer).username;
    const history = useHistory();

    if (!isLoggedIn && !isSignedUp) {
        history.push('/logIn');
        return null;
    } else {
        return children
        //children is a profile page
    }
}

export default AuthHoc;
