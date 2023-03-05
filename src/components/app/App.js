import React from "react";

import Form from "../form";
import TodoList from "../todoList";
import Alert from "../Alert";
import FilterPanel from "../filterPanel";

import './app.css';

const App = () => {
    return (
        <React.Fragment>
            <Alert/>
            <div className='todo-app'>
                <h1>What`s your plans for today?</h1>
                <Form/>
                <FilterPanel/>
                <TodoList/>
            </div>
        </React.Fragment>

    )
}

export default App;