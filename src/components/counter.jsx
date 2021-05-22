import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 2,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleClick = () => {
    this.setState((prev) => {
      return {
        ...this.state,
        count: prev.count + 1,
      };
    });
  };
  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">
          increment
        </button>
        {this.state.tags.length <= 0 ? (
          <h1>here is nothing to display</h1>
        ) : (
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default Counter;
