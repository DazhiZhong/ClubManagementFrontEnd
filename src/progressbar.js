import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
 
class MyProgressBar extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      progress:props.progress
    }
  }
  render() {
    return (
      <ProgressBar
        percent={this.state.progress}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    );
  }
}

export default MyProgressBar