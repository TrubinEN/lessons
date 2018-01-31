import React from "react";
import "./Step.css";
import classNames from "classnames"

export default class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "step-clickable": props.isClickable,
      "step-selected": props.isSelected
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      "step-clickable": nextProps.isClickable,
      "step-selected": nextProps.isSelected
    });
  }
  handleClick = () => {
    if (this.props.isClickable === true) {
      this.props.onClick(this.props.number);
    }
  };
  render() {
    const stepClass = this.state;
    return (
      <div className={classNames("step", stepClass)} onClick={this.handleClick}>
        <p className="step__number">{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
}
