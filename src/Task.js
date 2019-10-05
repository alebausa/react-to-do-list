import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  state = {
    crossed: false
  }

  crossDone() {
    this.setState({ crossed: !this.state })
  }

  render() {
    let li_class = this.state.crossed ? "crossedTask" : "uncrossedTask";
    return (
      <li className={li_class} onClick={this.crossDone.bind(this)}>{this.props.children}</li>
    );
  }
}

export default Task;