import React from "react";

export default class NewsPost extends React.Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}
