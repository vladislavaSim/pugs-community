import React from "react";
import {useHistory} from "react-router-dom";

export function Back() {
    const history = useHistory()

    function goBack() {
        history.goBack()
    }
    return <div>
        <button onClick={() => goBack()} className='return_btn'>return</button>
    </div>
}
