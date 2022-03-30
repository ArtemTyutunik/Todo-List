import React, {useState} from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Form from "../form";



export const TodoListItem = ({todo, onCompleted, onRemove}) => {
    const {isCompleted, id, text} = todo;

    return (
        <div className={isCompleted ? 'todo-row complete' : 'todo-row'}>
            <div className = "todo-row_text" onClick={() => onCompleted(id)}>
                <p>{text}</p>
            </div>
            <div className = "icons">
                <RiCloseCircleLine
                    onClick={() => onRemove(id)}
                    className='delete-icon'
                />
            </div>
        </div>

    )
}

