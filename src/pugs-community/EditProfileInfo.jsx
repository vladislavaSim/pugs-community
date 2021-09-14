import React from "react";
import {connect} from "react-redux";
import {isEdit, logIn} from "./action/action";
import {ProfilePic} from "./ProfilePic";

function EditProfileInfo(props) {
    const {info, isEdit, toggleToEdit, saveInfo} = props;

    function prepObj(key, e) {
        return { ...info,
            [key]: e.target.value}
    }
    function renderUserInfo(obj) {
            return <div className='edit_user_info'>
                <ProfilePic />
                <p className='edit_user_title'>Username:</p>
                { isEdit
                    ? <input value={obj.username} onChange={(e) => saveInfo(prepObj('username', e))} />
                    : <p>{obj.username}</p> }
                <button onClick={() => toggleToEdit()} className='edit_save_btn'>{ isEdit ? 'save' : 'edit'}</button>
                <p className='edit_user_title'>Password:</p>
                { isEdit
                    ? <input value={obj.password} onChange={(e) => saveInfo(prepObj('password', e))}/>
                : <p>{obj.password}</p> }
                <button onClick={() => toggleToEdit()} className='edit_save_btn'>{ isEdit ? 'save' : 'edit'}</button>
            </div>
    }
    return <div>
        {renderUserInfo(info)}
    </div>
}
const mapStateToProps = (state) => ({
    info: state.logInReducer,
    isEdit: state.toggleItemToEdit
})
const mapDispatchToProps = (dispatch) => ({
    toggleToEdit: () => dispatch(isEdit()),
    saveInfo: (info) => dispatch(logIn(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileInfo)