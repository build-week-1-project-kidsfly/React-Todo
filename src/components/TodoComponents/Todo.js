import React from 'react';

const Todo = (props) => {
    const { groceryItem, toggleItem } = props;

    const clickHandler = () => {
        toggleItem(groceryItem.id)
    };
    return (
        <div className={`item${groceryItem.purchased ? " purchased" : ""}`}
             onClick={clickHandler}>
            <p>
                {groceryItem.name}
            </p>
        </div>
    );
};

export default Todo;
