import { useEffect, useState } from "react";
import AddNewModal from "./components/AddNewModal";
import Todo, { url } from "./components/Todo";
import { TodoResponse } from "./lib/types/TodoTypes";

const App = () => {
  const [show, setShow] = useState(false);

  const [todos, setTodos] = useState<TodoResponse | null>(null);

  const fetchTodos = async () => {
    const response = await fetch(url);

    const data: TodoResponse = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="h-screen grid place-items-center mx-64">
      <Todo showModal={() => setShow(true)} todos={todos} />
      {show && (
        <AddNewModal refetch={fetchTodos} onClose={() => setShow(false)} />
      )}
    </main>
  );
};

export default App;
