import React from "react";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {logIn, showSuccessMessage, showSuccessName} from "./action/action";
import {SuccessMessage} from "./SuccessMessage";
import puggy from './img/pug_paws.png'

function LoginPage(props) {
    const history = useHistory();
    const {info, submit, message, show, toStartShowing, showPageName} = props;

    const prepareObject = (key, e) => {
   return {...info,
        [key]: e.target.value}
    };

    function showingMessage() {
        if(show) {
            return <SuccessMessage name={message[1]}/>
        }
        return null;
    }

    function combineSuccess() {
        toStartShowing()
        showPageName()
        setTimeout(() => history.push('/profile'), 1000)
    }
    return <div>
        <div className='data_user_box'>
            <img src={puggy} alt='dog' className='puggy'/>
            Please log in:
            <input type="text" onChange={(e) => submit(prepareObject('username', e))} placeholder='username'/>
            <input type="password" onChange={(e) => submit(prepareObject('password', e))} placeholder='password'/>
            <button type='submit' onClick={() => combineSuccess()} className='user_box_buttons'>Log in</button>
            {info.username && info.password ? showingMessage() : null}
            <Link to='/main'>Return</Link>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    info: state.logInReducer,
    message: state.showSuccess.text,
    show: state.showSuccess.show
});
const mapDispatchToProps = (dispatch) => ({
    submit: (info) => dispatch(logIn(info)),
    showPageName: () => dispatch(showSuccessName()),
    toStartShowing: () => dispatch(showSuccessMessage())
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
