import React from "react";

export default class NewsPost extends React.Component {
  render() {
    const { text = "" } = this.props;
    return <p>{text}</p>;
  }
}
