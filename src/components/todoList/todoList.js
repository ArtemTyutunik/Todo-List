import React from "react";

import TodoListItem from "../todoListItem";
import {useDispatch, useSelector} from "react-redux";
import {completeTodo, removeTodo} from "../../actions/actions";

const filterTodos = (filter, todos) => {
    switch (filter){
        case 'all':
            return todos
        case 'done':
            return todos.filter((item) => item.isCompleted)
        case "active":
            return todos.filter((item)=> !item.isCompleted)
    }
}

export const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const filterName = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const filteredTodos = filterTodos(filterName, todos)

    const onCompleted = id => dispatch(completeTodo(id));
    const onRemove = id => dispatch(removeTodo(id))


    return filteredTodos.map( (todo, idx) =>
        <TodoListItem key = {idx}
                      todo = {todo}
                      onCompleted = {onCompleted}
                      onRemove = {onRemove}/>)
}