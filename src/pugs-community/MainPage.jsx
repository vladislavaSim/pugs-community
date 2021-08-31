import React from "react";
import pug from "./img/pug.jpg"
import {Link} from "react-router-dom";

export function MainPage() {
    return <div className='main_page'>
        <div className='header'>Welcome to Pug club!</div>
        <div className='user_box'>
            Do you have an account?
            <Link to='/signUp' className='user_box_buttons'>No, I want to create it</Link>
            <Link to='/logIn' className='user_box_buttons'>Yes, I want to log in</Link>
        </div>
        <div className='shader'>
            <img className='pug' src={pug} alt='' style={{width: '100%', overflow: 'hidden', backgroundSize: 'cover'}}/>
        </div>
    </div>
}