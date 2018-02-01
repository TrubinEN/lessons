import React, { Component } from "react";
import "./Switcher.css";

export default class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  handleChangeChild = event => {
    const { id } = event.target.dataset;
    this.setState({
      selectedChild: id
    });
  };
  render() {
    let { children } = this.props;
    const { selectedChild } = this.state;
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {children.map((item, i) => {
              return (
                <li
                  key={i}
                  data-id={i}
                  onClick={this.handleChangeChild}
                  className="component-list__name"
                >
                  {item.type.displayName || item.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{children[selectedChild]}</div>
      </div>
    );
  }
}
