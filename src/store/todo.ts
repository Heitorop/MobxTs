/** @format */

import {makeAutoObservable } from "mobx";

interface Todos {
    id: number;
    title: string;
    completed: boolean;
  }

class Todo {
  todos : Array<Todos> = [
    { id: 1, title: "Buy butter", completed: false },
    { id: 2, title: "Buy bread", completed: false },
    { id: 3, title: "Buy milk", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo : Todos) {
    this.todos.push(todo);
  }

  removeTodo(id : number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("remove");
  }

  completeTodo(todo : Todos) {
    todo.completed === true
      ? (todo.completed = false)
      : (todo.completed = true);
    console.log("completed");
  }

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default new Todo();
