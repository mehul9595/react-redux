import React, { useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo";

const TodoList = (props) => {
  const todos = useSelector((state) => state.TodosStore.todos);

  return (
    <ul>
      {todos && todos.length
        ? todos.map((todo, index) => {
            console.log(todo);
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
            // return (
            //   <li key={`todoitem-${todo.id}`}>
            //     <div>
            //       <span>{todo.text}</span>
            //       <span onClick={onDelete(todo.id)}>x</span>
            //     </div>
            //   </li>
            // );
          })
        : "null"}
    </ul>
  );
};

export default TodoList;
