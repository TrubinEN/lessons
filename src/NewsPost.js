import React from "react";
import "./NewsPost.css";

export default class NewsPost extends React.Component {
  render() {
    const { text = "" } = this.props;
    return <p className="news-post">{text}</p>;
  }
}
