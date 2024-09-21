import { TodoResponse } from "../lib/types/TodoTypes";
import SearchBar from "./SearchBar";

export const url = "http://localhost:3000/todos";

type Props = {
  showModal: () => void;
  todos: TodoResponse | null;
};

const Todo = ({ showModal, todos }: Props) => {
  return (
    <div className="space-y-4 w-full">
      <h1 className="text-4xl font-bold">Todo App</h1>

      <div className="bg-indigo-50 p-12 rounded-xl">
        <div className="flex gap-4">
          <SearchBar />
          <button
            onClick={showModal}
            className="px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            Add new
          </button>
        </div>
        <div className="space-y-4 mt-4">
          {todos ? (
            todos.map((task) => (
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <p className="text-xl">{task.title}</p>{" "}
                  <p className="self-end">{task.date}</p>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 text-white py-2 bg-blue-500 rounded-lg">
                    EDIT
                  </button>
                  <button className="px-3 text-white py-2 bg-red-500 rounded-lg">
                    DELETE
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

// TODO: Модалка с полями Название и кнопкой "Добавить"
// TODO: Сделать добавление задачи на сервер
