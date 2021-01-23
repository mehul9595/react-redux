import { v4 as uuidv4 } from "uuid";

const ini = {
  todos: [],
  todoCount: 0,
};

function Todos(state = ini, action) {
  switch (action.type) {
    case "ADD_TODOS":
      const text = action.text;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text,
            completed: false,
            id: uuidv4().substr(0, 4),
          },
        ],
        todoCount: state.todoCount + 1,
      };

    //   return {
    //     ...state,
    //     num: state.num + action.step,
    //   };
    case "TOGGLE_TODOS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todoId
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODOS":
      return {
        ...state,
        todoCount: state.todoCount - 1,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    default:
      return state;
  }
}

export default Todos;
