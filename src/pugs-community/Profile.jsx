import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import EditProfileInfo from "./EditProfileInfo";
import {isEdit} from "./action/action";
import {GetAPug} from "./GetAPug";
import {Messages} from "./Messages";
import {ToDoList} from "./ToDoList";

export function Profile() {

    const [tab, setTab] = useState(1)

    const info = useSelector((state) => state.logInReducer);
    const isEditing = useSelector(state => state.toggleItemToEdit)
    const history = useHistory()
    const dispatch = useDispatch()
    function handleEditPage() {
        dispatch((isEdit()))
        setTab(3)
    }

    function switchTabs() {
        if(tab === 1) {
            return <GetAPug/>
        } else if(tab === 2) {
            return <Messages/>
        } else if(tab === 3) {
            return <EditProfileInfo />
        }else if(tab === 4) {
            return <ToDoList/>
        } else {
                return null
            }
        }


    function exit() {
        history.push('/main')
    }

    return (
        <div>
            <div className='profile_container'>
                <Link className='return' to='/main' >Return to main page</Link>
                Hello, {info.username}
            </div>
            <div className='buttons_container'>
                <button onClick={() => handleEditPage()} className='user_box_buttons'>Edit profile</button>
                <button className='user_box_buttons' onClick={() => setTab(4)}>to do list</button>
                <button className='user_box_buttons' onClick={() => setTab(2)}>Messages</button>
                <button className='user_box_buttons' onClick={() => setTab(1)}>Get a pug</button>
                <button className='user_box_buttons' onClick={() => setTab(5)}>Secret button</button>
                <button className='user_box_buttons' onClick={exit}>Exit</button>
            </div>
            {switchTabs()}
        </div>
    );
}
