import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo, showAlert} from "../../actions/actions";



export const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const inputEl = useRef(null);

    useEffect(() => inputEl.current.focus())

    const createTodo = text => ({
        text,
        id: Math.floor(Math.random()*1000),
        isCompleted: false
    })

    const handleChange = e => {
        setValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (value.trim()){
            dispatch(addTodo(createTodo(value)))
            setValue('')
        }
        else {
            dispatch(showAlert())
        }

    }


    return (
        <form  className='todo-form'
            onSubmit={e => onSubmit(e)}>
            <input type="text"
                   className='todo-input'
                   value={value}
                   ref={inputEl}
                   onChange = {e => handleChange(e)}/>
            <button  className="todo-button">
                Create Todo
            </button>
        </form>
    )
}