import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        This is brand new lmao
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
