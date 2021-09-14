import React, {useState} from "react";
import {useSelector} from "react-redux";

export function ToDoList() {
    const newTodo = useSelector(state => state.newToDo)
    const [val, setVal] = useState('');

    function handleInput(e) {
        setVal(e.target.value)
    }
    return <>
        <h3>Things to do with my pug:</h3>
        <input value={val} onChange={handleInput}/>
    </>
}