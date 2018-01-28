import React from "react";
import NewsPost from "./NewsPost";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsInput: "",
      news: []
    };
  }
  handleChange = event => {
    this.setState({
      newsInput: event.target.value
    });
  };
  handleNewPost = event => {
    this.setState((prevState, props) => {
      const { news, newsInput } = prevState;
      return {
        newsInput: "",
        news: [...news, { text: newsInput }]
      };
    });
  };
  render() {
    const { newsInput: value, news } = this.state;
    return (
      <div className="App">
        <input
          className="todo-input"
          onChange={this.handleChange}
          value={value}
          placeholder="Какие новости?"
        />
        <button onClick={this.handleNewPost}>Создать новость</button>
        <div className="todo-container">
          {news.map((news, i) => {
            return <NewsPost key={i} text={news.text} />;
          })}
        </div>
      </div>
    );
  }
}
