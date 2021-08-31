import React from "react";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {showSuccessMessage, showSuccessName, signUp} from "./action/action";
import {SuccessMessage} from "./SuccessMessage";
import puggy from './img/pug_paws.png'

function SignUpPage(props) {
    const {info, submit, show, message, toStartShowing, showPageName} = props;
    const history = useHistory()

    const prepareObject = (key, e) => ({
        ...info,
        // username: store.username,
        // email: store.username,
        // password: store.password,
        [key]: e.target.value,
        // password, email, username: e.target.value
    });

    function showingMessage() {
        if(show) {
            return <SuccessMessage name={message[0]} />
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
            <img src={puggy} className='puggy'/>
            Enter your info:
            <input type="email" onChange={(e) => submit(prepareObject('email', e))} placeholder='e-mail'/>
            <input type="text" onChange={(e) => submit(prepareObject('username', e))} placeholder='username'/>
            <input type="password" onChange={(e) => submit(prepareObject('password', e))} placeholder='password'/>
            <button type='submit' onClick={() => combineSuccess()} className='user_box_buttons'>Sign Up</button>
            {info.email && info.username && info.password ? showingMessage() : null}
            <Link to='/main'>Return</Link>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    info: state.signUpReducer,
    message: state.showSuccess.text,
    show: state.showSuccess.show
});
const mapDispatchToProps = (dispatch) => ({
    submit: (info) => dispatch(signUp(info)),
    showPageName: () => dispatch(showSuccessName()),
    toStartShowing: () => dispatch(showSuccessMessage())
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)