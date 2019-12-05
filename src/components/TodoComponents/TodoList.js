// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const { todoItems, toggleItem } = props;
  const newKey = Date.now();
  return (
    <div className="shopping-list">
      {todoItems.map(item => {
        return <Todo groceryItem={item} toggleItem={toggleItem} key={newKey} />;
      })}
    </div>
  );
};

export default TodoList;
