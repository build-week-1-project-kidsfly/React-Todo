// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const { queHacer, todoItems, toggleCosa } = props;
  const newKey = Date.now();
  return (
    <div className="shopping-list">
      {queHacer.map(item => {
        // console.log(item);
        return <Todo algoQueHacer={item} key={item.id} toggleTask={toggleCosa} />
      })}

    </div>
  );
};

export default TodoList;
