import React from "react";
import { shallow } from "enzyme";
import Spinner from "react-svg-spinner";
import { Followers } from "../Followers";
import Follower from "../../Follower";

describe("Компонент Followers", () => {
  // демо данные
  const fetchFollowersRequest = jest.fn();
  const ids = [
    { login: "user1", avatar_url: "/avatar1.jpg" },
    { login: "user2", avatar_url: "/avatar2.jpg" },
    { login: "user3", avatar_url: "/avatar3.jpg" }
  ];
  const wrapper = shallow(
    <Followers
      login="testUser"
      ids={ids}
      fetchFollowersRequest={fetchFollowersRequest}
    />
  );

  // тестирование
  it("присутствует метод componentDidMount", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("наличие лоадера", () => {
    const wrapperTestloader = shallow(
      <Followers
        login="testUser"
        isFetching={true}
        ids={ids}
        fetchFollowersRequest={fetchFollowersRequest}
      />
    );
    expect(wrapperTestloader.find(Spinner)).toHaveLength(1);
  });

  it("возвращаются компоненты Followers в том количестве, в котором передаются в props.ids", () => {
    expect(wrapper.find(Follower)).toHaveLength(ids.length);
  });
});
