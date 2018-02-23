import React from "react";
import { shallow, mount } from "enzyme";
import Follower from "../Follower";
import { Link, MemoryRouter } from "react-router-dom";

// демо данные
const login = "userName";
const avatar = "/img/photo.png";
const wrapper = shallow(<Follower login={login} avatar={avatar} />);

// тестирование
describe("Компонент Follower", () => {
  it("аватар пользователя", function() {
    expect(wrapper.find("img").props().src).toEqual(avatar);
  });

  it("логин пользователя", function() {
    const wrapper = mount(
      <MemoryRouter>
        <Follower login={login} avatar={avatar} />
      </MemoryRouter>
    );
    expect(wrapper.find("Follower").prop("login")).toBe(login);
  });

  it("ссылка с логина пользователя ведет на /user/{login}", function() {
    expect(wrapper.find(Link).props().to).toEqual(`/user/${login}`);
  });
});
