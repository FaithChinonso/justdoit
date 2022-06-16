import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import TodoList from "./components/todoList";
import { Todo } from "./model";

const App: React.FC = () => {
  let sessionTodos: Todo[];
  const storedTodo: Todo[] = JSON.parse(sessionStorage.getItem("todo") || "");
  if (storedTodo.length !== 0) {
    sessionTodos = storedTodo;
    console.log(storedTodo);
  } else {
    sessionTodos = [];
  }
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(sessionTodos);
  // const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    if (todos) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);

      setTodo("");
    }
    console.log(todos);
  };
  useEffect(() => {
    sessionStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <div className="heading">
        JUST<span>do</span>IT
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
