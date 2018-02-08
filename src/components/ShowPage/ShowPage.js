import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { requestShow } from "../../reducers/shows";

const ShowContainer = styled.div`
  text-align: center;
`;
const FilmsPersonAll = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px;
`;

class ShowPage extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    const { requestShow, isFetching } = props;

    this.state = { isFetching };

    if (requestShow && id) {
      requestShow(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { isFetching } = nextProps;
    this.setState({ isFetching });
  }
  render() {
    const { isFetching } = this.state;
    const { name, image, summary, _embedded } = this.props.film;

    return (
      <ShowContainer>
        {!isFetching ? (
          <Fragment>
            <p>{name}</p>
            {image && <img src={image["medium"]} alt={name} />}
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <FilmsPersonAll>
              {_embedded &&
                _embedded["cast"].map((item, i) => {
                  return (
                    <div className="t-person" key={i}>
                      <p>{item.person.name}</p>
                      {item.person.image && (
                        <img
                          src={item.person.image["medium"]}
                          alt={item.person.name}
                        />
                      )}
                    </div>
                  );
                })}
            </FilmsPersonAll>
          </Fragment>
        ) : (
          <p>Идет загрузка данных о фильме...</p>
        )}
      </ShowContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.shows.error,
    film: state.shows.film,
    isFetching: state.shows.isFetching
  };
};
const mapDispatchToProps = { requestShow };
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
