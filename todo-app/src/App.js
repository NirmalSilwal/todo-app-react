import "./App.css";
import React, { useState } from "react";

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); // we'll have array of objects here

  return (
    <div className="App">
      <header>
        <h1>Nirmal's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
