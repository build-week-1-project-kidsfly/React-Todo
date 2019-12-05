import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import { Lista } from './components/TodoComponents/Data'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      currentList: Lista
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.listItem)
    this.setState({ listItem: "" })
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input value={this.state.listItem} placeholder='...todo' type='text' onChange={this.changeHandler} />
        <button>Add Todo</button>

      </form>
    );
  }
}

export default App;
