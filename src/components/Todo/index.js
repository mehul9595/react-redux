import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onDelete = (params) => {
    console.log("delte todo id", params);
    dispatch({ type: "DELETE_TODOS", todoId: params });
  };

  const onToggleHandle = (params) => {
    dispatch({ type: "TOGGLE_TODOS", todoId: params });
  };

  return (
    <div>
      <li
        className={"todo-li " + (todo.completed && "todo-li-completed")}
        key={`todoitem-li-${todo.id}`}
        onClick={() => onToggleHandle(todo.id)}
      >
        <div>
          <span>
            {todo && todo.completed ? "👌" : "👋"} {todo.text}
          </span>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            x
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
