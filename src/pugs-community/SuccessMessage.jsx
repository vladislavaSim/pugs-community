import React from "react";

export function SuccessMessage(props) {
    return <div className='success_message'>
        <h3>Congrats!</h3>
        <p>You {props.name} successfully!</p>
    </div>
}