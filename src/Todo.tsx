/** @format */

import { observer } from "mobx-react-lite";
import React from "react";
import todo from "./store/todo";

export const Todo = observer(() => {
  console.log("render");
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>Get all todos</button>
      {todo.todos.map((t) => (
        <div key={t.id} className='todo'>
          <input
            type='checkbox'
            checked={t.completed}
            onChange={() => todo.completeTodo(t)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});
