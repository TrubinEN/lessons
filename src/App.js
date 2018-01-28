import React from "react";
import NewsPost from "./NewsPost";

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
      const news = prevState.news;
      news.push(prevState.newsInput);
      return {
        newsInput: "",
        news: news
      };
    });
  };
  render() {
    const { newsInput: value, news } = this.state;
    return (
      <div className="App">
        <input
          onChange={this.handleChange}
          value={value}
          placeholder="Какие новости?"
        />
        <button onClick={this.handleNewPost}>Добавить</button>
        <div>
          {news.map((text, i) => {
            return <NewsPost key={text} text={text} />;
          })}
        </div>
      </div>
    );
  }
}
