import React, { useState } from "react";
import { useDispatch } from "react-redux";
const TodoInput = (props) => {
  const dispatch = useDispatch();
  // const number = useSelector((state) => state.TodosStore.num);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    if (e.target.value) setTodoText(e.target.value);
  };

  const handleClick = (e) => {
    if (todoText.trim() === "") return;

    dispatch({ type: "ADD_TODOS", text: todoText });
    setTodoText("");
  };

  return (
    <div>
      <input onChange={handleChange} value={todoText} />
      <button type="button" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
