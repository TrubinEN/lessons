import React from "react";
import "./Step.css";

export default class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classFullName: ["step", ...this.generateСlasses(props)]
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      classFullName: ["step", ...this.generateСlasses(nextProps)]
    });
  }
  generateСlasses(props) {
    let classFullName = [];
    if (props.isClickable === true) {
      classFullName.push("step-clickable");
    }
    if (props.isSelected === true) {
      classFullName.push("step-selected");
    }
    return classFullName;
  }
  handleClick = event => {
    if (this.props.isClickable === true) {
      this.props.onClick(this.props.number);
    }
  };
  render() {
    let { classFullName } = this.state;
    return (
      <div className={classFullName.join(" ")} onClick={this.handleClick}>
        <p className="step__number">{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
}
