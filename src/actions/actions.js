
export const removeTodo = id => ({type: "REMOVE_TODO", payload : id})

export const addTodo = todo => ({type: "ADD_TODO", payload: todo})

export const completeTodo = id => ({type: "COMPLETE_TODO", payload: id})

export const showAlert = () => ({type: "SHOW_ALERT"})

export const hideAlert = () => ({type: "HIDE_ALERT"})

export const changeFilter = name => ({type: "CHANGE_FILTER", payload: name})