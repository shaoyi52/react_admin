const ADD_TODO="ADD_TODO";
const TOGGLE_TODO="TOGGLE_TODO"
const SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER"


let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
    };
};
  
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    };
};
 
const todos=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [{
                ...state},
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}

export default todos;