import React from "react";

const TodoListItem = (props) => {
  return (
    <li>
      <i
        className="fa-regular fa-circle-xmark"
        onClick={ () => {
            // console.log(props.id);
            // user defined function
            // if the user clicks on it the user defined function
            // will execute
            props.onSelectEvent(props.id);
        }}
      ></i>
      {props.listItem}
    </li>
  );
};

export default TodoListItem;
