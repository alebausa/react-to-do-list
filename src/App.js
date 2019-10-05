import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import AddTask from './AddTask';
import { moreTasks } from './data/moreTasks';
import { tasks } from './data/tasks';

class App extends Component {
  state = {
    initialTasks: tasks
  }

  randomTask = () => {
    const { initialTasks } = this.state;
    const newTask = moreTasks[Math.floor(Math.random() * moreTasks.length)];
    this.setState({
      initialTasks: [...initialTasks, newTask],
    });
  }

  addTask = (value) => {
    const { initialTasks } = this.state;
    this.setState({
      initialTasks: [...initialTasks, value],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To-do list</h1>
        <button className="btn" onClick={this.randomTask}>Add random task</button>
        <AddTask submit={this.addTask} />
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
