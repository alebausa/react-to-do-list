import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import AddTask from './AddTask';
import { moreTasks } from './data/moreTasks';
import { tasks } from './data/tasks';

class App extends Component {
  state = {
    myTasks: tasks,
  }

  randomTask = () => {
    const { myTasks } = this.state;
    const newTask = moreTasks[Math.floor(Math.random() * moreTasks.length)];
    this.setState({
      myTasks: [...myTasks, newTask],
    });
  }

  addTask = (value) => {
    const { myTasks } = this.state;
    this.setState({
      myTasks: [...myTasks, value],
    });
  }

  updateToDoList = (indexN) => {
    const { myTasks } = this.state;
    var updatedList = [...myTasks];
    updatedList.splice(indexN, 1);
    this.setState({
      myTasks: updatedList,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-do list</h1>
        <button className="btn" onClick={this.randomTask}>Add random task</button>
        <AddTask submit={this.addTask} />
        <ul>
          {this.state.myTasks.map((task, index) => {
            return (
              <Task key={index} deleteTask={this.updateToDoList}>{task}</Task>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
