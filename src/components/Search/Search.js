import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchSearchRequest } from "../../actions/searchActions";
import styled from "styled-components";

const FilmSearchConteiner = styled.div`
  margin-top: 30px;
  text-align: center;
`;
const ResultFilms = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Film = styled.div`
  max-width: 260px;
  float: left;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
const FilmPreview = styled.img`
  text-align: center;
  display: block;
  margin: 0 auto;
`;
const FilmH2 = styled.h2`
  font-size: 18px;
  text-align: center;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: [],
      isFetching: props.isFetching
    };
  }
  handleChangeValue = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  handleClickSearch = () => {
    const { value } = this.state;
    const { fetchSearchRequest, isFetching } = this.props;
    if (!isFetching) {
      fetchSearchRequest(value);
    }
  };
  componentWillReceiveProps(nextProps) {
    const { result, isFetching } = nextProps;
    if (result) {
      this.setState({
        result: [...result],
        isFetching
      });
    }
  }
  render() {
    const { value, result, isFetching } = this.state;
    return (
      <div className="search">
        <FilmSearchConteiner>
          {!isFetching ? (
            <Fragment>
              <input
                placeholder="Название сериала"
                value={value}
                onChange={this.handleChangeValue}
              />
              <button onClick={this.handleClickSearch}>Найти</button>
            </Fragment>
          ) : (
            <p>Идет поиск...</p>
          )}
        </FilmSearchConteiner>
        <ResultFilms className="t-search-result">
          {result.map((film, i) => {
            return (
              <Film key={i} className="t-preview">
                <a href={"/shows/" + film.id} className="t-link">
                  <FilmH2>{film.name}</FilmH2>
                </a>
                {film.image && (
                  <FilmPreview src={film.image["medium"]} alt={film.name} />
                )}
                <div dangerouslySetInnerHTML={{ __html: film.summary }} />
              </Film>
            );
          })}
        </ResultFilms>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.search.error,
  result: state.search.result,
  isFetching: state.search.isFetching
});
const mapDispatchToProps = { fetchSearchRequest };
export default connect(mapStateToProps, mapDispatchToProps)(Search);
