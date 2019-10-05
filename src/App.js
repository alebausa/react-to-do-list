import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import { moreTasks } from './data/moreTasks';
import { tasks } from './data/tasks';

class App extends Component {
  state = {
    initialTasks: tasks
  }

  addTask = () => {
    const { initialTasks } = this.state;
    const newTask = moreTasks[Math.floor(Math.random() * moreTasks.length)];
    this.setState({
      initialTasks: [...initialTasks, newTask],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To-do list</h1>
        <button className="btn" onClick={this.addTask}>Add random task</button>
        <ul>
          {this.state.initialTasks.map((task, index) => {
            return (
              <Task key={index}>{task}</Task>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
