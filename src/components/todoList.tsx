import React from "react";
import "./style.css";
import { Todo } from "../model";
import SingleTodo from "./singleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const uncompletedTodos = todos?.filter(t => t.isDone === false);
  const completedTodos = todos?.filter(t => t.isDone === true);
  return (
    <div className="container">
      <div className="todos">
        <div className="todos__heading">Active Task</div>
        {uncompletedTodos?.map(todo => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div className="todos remove">
        <div className="todos__heading">Completed Task</div>
        {completedTodos?.map(todo => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
    // <div className="todos">
    //   {todos.map(todo => (
    //     <SingleTodo
    //       key={todo.id}
    //       todo={todo}
    //       todos={todos}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
  );
};

export default TodoList;
