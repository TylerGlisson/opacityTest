import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      newClass: ''
    }
  }
  addClass = () => {
    if (this.state.status == 0) {
      this.setState({status: 1, newClass: 'newClass'});
    }
    else {
      this.setState({status: 0, newClass: ''});
    }
  }
  render() {
    let newClass = 'initialClass ' + this.state.newClass;
    return (
      <div className="outerDiv">
        <button class="btn" type="button" onClick={this.addClass}>Click Me!</button>
        <div className={newClass}></div>
      </div>
    );
  }
}

export default App;
