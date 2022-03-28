const initialState = {
    todos: [],
    warning: false,
    filter: 'all'
}

const REMOVE_TODO = "REMOVE_TODO";
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";
const CHANGE_FILTER = "CHANGE_FILTER";

const reducer = (state = initialState, action) => {
    switch (action.type){

        case REMOVE_TODO:
            const itemId = action.payload;
            const updatedTodos = state.todos.filter( item => item.id !== itemId)
            return {
                ...state,
                todos: updatedTodos
            }

        case ADD_TODO:
            const newTodo = action.payload
            return {
                ...state,
                todos: [newTodo, ...state.todos]
        }

        case COMPLETE_TODO:
            const completedId = action.payload;
            const newTodos = state.todos.map(todo => {
                if (todo.id === completedId){
                    todo.isCompleted = !todo.isCompleted
                }
                return todo;
            });
            return {
                ...state,
                todos: newTodos
            }

        case SHOW_ALERT:
            return {
                ...state,
                warning: true
            }

        case  HIDE_ALERT:
            return {
                ...state,
                warning: false
            }

        case CHANGE_FILTER:
            const filterName = action.payload
            return {
                ...state,
                filter: filterName
            }

        default:
            return state
    }
}

export default reducer;