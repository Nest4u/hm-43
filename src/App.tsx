import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="text-center bg-gray-500 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Todo List</h1>
        <AddTodo />
        <TodoList  />
      </div>
    </TodoProvider>
  );
};

export default App;