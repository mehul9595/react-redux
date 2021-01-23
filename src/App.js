import { useSelector, useDispatch } from "react-redux";
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  const todoCount = useSelector((state) => state.TodosStore.todos.length);
  
  return (
    <div className="App">
      <div>Hello Todo Items - {todoCount}</div>
      <TodoInput />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
