import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";
import Follower from "../Follower";
import { fetchFollowersRequest } from "../../actions/followers";
import { getIds, getIsFetched, getIsFetching } from "../../reducers/followers";

export class Followers extends Component {
  static defaultProps = {
    ids: [],
    isFetching: false,
    isFetched: false
  };

  componentDidMount() {
    const { login, fetchFollowersRequest } = this.props;

    if (login) {
      fetchFollowersRequest(login);
    }
  }

  render() {
    const { ids, isFetched } = this.props;

    return (
      <div>
        {!isFetched && <Spinner size="64px" color="fuchsia" gap={5} />}
        {ids &&
          ids.map((item, i) => {
            return (
              <Follower key={i} login={item.login} avatar={item.avatar_url} />
            );
          })}
      </div>
    );
  }
}

const mapStateToPropsFollowers = state => ({
  ids: getIds(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToPropsFollowers = { fetchFollowersRequest };

export default connect(mapStateToPropsFollowers, mapDispatchToPropsFollowers)(
  Followers
);
