import { useSelector, useDispatch } from "react-redux";
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const todoCount = useSelector((state) => state.TodosStore.todoCount);
  
  return (
    <div className="App">
      <div>Hello Todo Items - {todoCount}</div>
      <TodoInput />
      <TodoList />
      {/* <button
        onClick={() =>
          dispatch({
            type: "ADD_TODOS",
            step: 1
          })
        }
      >
        Increment
      </button>
      <button 
        onClick={() =>
          dispatch({
            type: "DELETE_TODOS",
            step: 1
          })
        }
      >
        Decrement
      </button>*/}
    </div>
  );
}

export default App;
