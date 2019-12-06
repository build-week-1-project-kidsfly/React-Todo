import React from 'react';
// import TodoForm from "./components/TodoComponents/TodoForm";
import { Lista } from './components/TodoComponents/Data'
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      currentList: Lista
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList queHacer={Lista}/>
        {/*<TodoForm list={this.state.currentList.task} />*/}
      </div>
    );
  }
}

export default App;
