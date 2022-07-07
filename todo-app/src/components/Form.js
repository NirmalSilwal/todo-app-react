// fist thing to make the component is import React
// you gotta let this file know that this is using React

import React from "react";

const Form = ({setInputText}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />

      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;