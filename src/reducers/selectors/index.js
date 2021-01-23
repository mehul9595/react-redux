export const TodoSelector = (todos, visibilityFilter) => {
  console.log("called selector", visibilityFilter);
//   const todos = state.TodosStore.todos;

  switch (visibilityFilter) {
    case "completed": {
      return todos.filter((todo) => todo.completed);
    }
    case "pending": {
      return todos.filter((todo) => !todo.completed);
    }
    default:
    case "all": {
      return todos;
    }
  }
};
