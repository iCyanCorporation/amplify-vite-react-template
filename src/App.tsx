import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { decrement, increment } from "./store/slices/counterSlice";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { t, i18n } = useTranslation();

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main>
      <div className="gap-2 flex">
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ja")}>日本語</button>
      </div>
      <h1>{t("welcome")}</h1>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
      {/* counter */}
      <div className="w-full">
        <h2>Counter</h2>
        <div className="flex items-center justify-center gap-2">
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>count is {count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
      {/* todo list */}
      <div>
        <h2>My todos</h2>
        <button className="w-full" onClick={createTodo}>
          + new
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
