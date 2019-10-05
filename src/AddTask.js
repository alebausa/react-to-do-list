import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "Brew tons of coffee",
    }
    this.handleTaskInput = this.handleTaskInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleTaskInput(event) {
    this.setState({
      task: event.target.value,
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.submit(this.state.task)
  }

  render() {
    return (
      <div className="form-block">
        <form onSubmit={this.handleFormSubmit}>
          <label>New task:</label>
          <input type="text" name="task" value={this.state.task} onChange={(e) => this.handleTaskInput(e)} />
          <input type="submit" value="Add task" className="btn secondary" />
        </form>
      </div>
    );
  }
}

export default AddTask;