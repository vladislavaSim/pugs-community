import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import EditProfileInfo from "./EditProfileInfo";
import {isEdit} from "./action/action";

export function Profile() {
    const info = useSelector((state) => state.logInReducer);
    const isEditing = useSelector(state => state.toggleItemToEdit)
    const history = useHistory()
    const dispatch = useDispatch()
    function handleEditPage() {
        dispatch((isEdit()))
    }
    function exit() {
        history.push('/main')
    }
    const name = () => {
        if(info.username) {}
    }


    return <div>
                <div className='profile_container'>
                    <Link className='return' to='/main' >Return to main page</Link>
                    Hello, {info.username}
                </div>
                <div className='buttons_container'>
                    <button onClick={() => handleEditPage()} className='user_box_buttons'>Edit profile</button>
                    <button className='user_box_buttons'>Search</button>
                    <button className='user_box_buttons'>Messages</button>
                    <button className='user_box_buttons'>Get a pug</button>
                    <button className='user_box_buttons' onClick={exit}>Exit</button>
                </div>
        <EditProfileInfo />
        </div>
}
