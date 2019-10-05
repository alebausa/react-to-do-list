import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crossed: false
    }
    this.crossDone = this.crossDone.bind(this);
  }

  crossDone() {
    this.setState({
      crossed: !this.state.crossed
    })
  }

  render() {
    let li_class = this.state.crossed ? "crossedTask" : "uncrossedTask";
    return (
      <li className={li_class} onClick={this.crossDone}>{this.props.children}</li>
    );
  }
}

export default Task;