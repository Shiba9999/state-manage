import React, { useState } from "react";
import ListFile from "./ListFile";
import { nanoid } from "nanoid";

const InputFile = () => {
  const [names, setNames] = useState("");
  const [todos, setTodos] = useState([]);

  function onChangehandler(e) {
    e.preventDefault();
    setNames(e.target.value);
  }
  function onClickHandler() {
    let todoObj = {
      id: nanoid(),
      data: names,
    };
    setTodos([...todos, todoObj]);
    setNames("");
  }

  function onDeleteHandler(id) {
    let filteredTodos = todos.filter((eachTodoObj) => eachTodoObj.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={names}
          onChange={(e) => onChangehandler(e)}
          placeholder="enter text"
        />
        <button onClick={onClickHandler}>add</button>
      </div>
      <div>
        {todos.length ? (
          <ListFile todos={todos} onDeleteHandler={onDeleteHandler} />
        ) : (
          "Add Todos"
        )}
      </div>
    </>
  );
};

export default InputFile;
