import React, { useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo";
import { TodoSelector } from "../../reducers/selectors";

const TodoList = (props) => {
  const visibilityFilter = useSelector((state) => state.VisibilityFilter);
  const todos = useSelector(state => TodoSelector(state.TodosStore.todos, visibilityFilter));

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
