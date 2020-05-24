export const fetchTodos = async () => {
  const response = await fetch("https://rn-todo-3e4cd.firebaseio.com/todos.json", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response;
};