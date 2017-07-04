import React, { Component } from 'react';
import './App.css';
import Task from './Components/Task'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      task_id: 0,
      text_buffer: ""
    }
  }

  addItem = (event) => {
    this.setState((state)=>({
      tasks: state.tasks.concat(<Task index={state.task_id} text={state.text_buffer}/>),
      task_id: state.task_id + 1
    }));
    this.refs.task_text.value='';
    event.preventDefault();
  }

  changeText = (event) => {
    this.setState({
      text_buffer: event.target.value
    })
  }

  render() {
    let list = this.state.tasks.map(
      (el, index) => <li key={index}>{el}</li>
    );
    return (
      <div className="App">
        <ul>{list}</ul>
        <form onSubmit={this.addItem.bind(this)}>
          <textarea ref='task_text' onChange={this.changeText.bind(this)} type='textbox' name={this.state.task_id}>
          </textarea>
          <button onClick={this.addItem}>ADD</button>
        </form>
      </div>
    );
  }
}

export default App;
