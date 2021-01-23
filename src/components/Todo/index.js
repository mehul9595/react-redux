import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onDelete = (params) => {
    console.log("delte todo id", params);
    dispatch({ type: "DELETE_TODOS", todoId: params });
  };

  const onToggleHandle = (params) => {
      dispatch({type: "TOGGLE_TODOS", todoId: params});
  }
  
  return (
    <div>
      <li key={`todoitem-li-${todo.id}`}>
        <div>
          <span>{todo.text}</span>
          <span onClick={onDelete.bind(null, todo.id)}>x</span>
          <span onClick={onToggleHandle.bind(null, todo.id)}>mark as done</span>
        </div>
      </li>
    </div>
  );
};

export default Todo;
