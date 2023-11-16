import React, { useState } from "react";
import "../utilities/todoapp.css";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const reflectChanges = (event) => {
    setItem(event.target.value);
  };

  const saveTodiList = (event) => {
    // if the input field is empty then
    // dont add it
    if (item === '')
      return '';

    setTodoList((prevItemsList) => {
      return [...prevItemsList, item];
    });
    setItem("");
  };

  const deleteListItem = (deleteItemId) => {
    // console.log('delete items', deleteItemId);

    setTodoList( (prevToDoList) => {
      return prevToDoList.filter( (currListItem, index) => {
        return index !== deleteItemId;
      })
    })
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2>TODO List</h2>

          <div className="add-to-list">
            <input
              type="text"
              onChange={reflectChanges}
              value={item}
              placeholder="Add a items"
            />
            <button onClick={saveTodiList}> + </button>
          </div>
          <div className="show-list">
            <ul>
              {todoList.map((eachItem, index, arr) => {
                return (
                  <TodoListItem
                    listItem={eachItem}
                    key={index}
                    id={index}
                    onSelectEvent={deleteListItem}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
