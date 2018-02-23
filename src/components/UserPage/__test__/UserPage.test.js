import React from "react";
import { shallow } from "enzyme";
import { UserPage, ErrorNotUser } from "../UserPage";
import Spinner from "react-svg-spinner";
import Followers from "../../Followers";

describe("Компонент UserPage", () => {
  // демо данные
  const fetchUserRequest = jest.fn();
  const fetchTokenOwnerRequest = jest.fn();

  const user = {
    login: "testName1",
    followers: 98,
    public_repos: 12,
    avatar_url: "/img/photo.png"
  };

  const wrapper = shallow(
    <UserPage
      match={{ params: { name: "testName2" } }}
      user={user}
      isFetched={true}
      fetchUserRequest={fetchUserRequest}
      fetchTokenOwnerRequest={fetchTokenOwnerRequest}
    />
  );

  // тестирование
  it("должен присутствовать метод componentDidMount в компаненте UserPage", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("должен присутствовать метод componentWillReceiveProps в компаненте UserPage", () => {
    expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
  });

  it("наличие лоадера", () => {
    const wrapperTestLoader = shallow(
      <UserPage
        match={{ params: { name: "testName2" } }}
        user={user}
        isFetching={false}
        fetchUserRequest={fetchUserRequest}
        fetchTokenOwnerRequest={fetchTokenOwnerRequest}
      />
    );
    expect(wrapperTestLoader.find(Spinner)).toHaveLength(1);
  });

  it("сообщение об отсутствие пользователя", () => {
    const wrapperTestMessage = shallow(
      <UserPage
        match={{ params: { name: "testName2" } }}
        user={null}
        isFetched={true}
        fetchUserRequest={fetchUserRequest}
        fetchTokenOwnerRequest={fetchTokenOwnerRequest}
      />
    );
    expect(wrapperTestMessage.find(ErrorNotUser)).toHaveLength(1);
  });

  it("аватар пользователя", function() {
    expect(wrapper.find(".user-profile-avatar img").props().src).toEqual(
      user.avatar_url
    );
  });

  it("логин пользователя", function() {
    expect(wrapper.find("h3").text()).toEqual(user.login);
  });

  it("фоловеры пользователя", function() {
    expect(wrapper.find(".user-profile-info-followers").text()).toMatch(
      new RegExp(user.followers)
    );
  });

  it("наличие компонента Followers с передачей login через props", () => {
    expect(wrapper.find(Followers).prop("login")).toEqual(user.login);
  });
});
