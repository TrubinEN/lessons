import React from "react";
import NewsPost from "./NewsPost";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.listNews = [];
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  addNews = event => {
    this.listNews.push(this.state.value);
    this.setState({
      value: ""
    });
  };
  render() {
    let value = this.state.value;

    return (
      <React.Fragment>
        <input
          onChange={this.handleChange}
          value={value}
          placeholder="Введите новость..."
        />

        <button onClick={this.addNews}>Добавить</button>

        <ul>
          {this.listNews.map((news, i) => <NewsPost key={i} value={news} />)}
        </ul>
      </React.Fragment>
    );
  }
}
