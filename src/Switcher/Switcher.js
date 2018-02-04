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
    const children = React.Children.toArray(this.props.children);
    const { selectedChild } = this.state;
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (item, i) => {
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
