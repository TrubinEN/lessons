import React from "react";
import { shallow } from "enzyme";
import { Route, Switch } from "react-router-dom";
import { AppRouter } from "../AppRouter";
import PrivateRoute from "../../PrivateRoute";

describe("Компонент AppRouter", () => {
  // демо данные
  const wrapper = shallow(<AppRouter />);

  // тестирование
  it("присутствует компонент Switch", () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it("присутствует компонент PrivateRoute", () => {
    expect(wrapper.find(PrivateRoute).length).toBeGreaterThanOrEqual(1);
  });

  it('компонент PrivateRoute содержит path равный "/user/:name"', () => {
    const searchValue = wrapper.findWhere(
      el => el.type() === PrivateRoute && el.prop("path") === "/user/:name"
    );
    expect(searchValue).toHaveLength(1);
  });

  it("присутствует компонент Route", () => {
    expect(wrapper.find(Route)).not.toHaveLength(0);
  });

  it('компонент Route содержит path равный "/login"', () => {
    const searchValue = wrapper.findWhere(
      el => el.type() === Route && el.prop("path") === "/login"
    );
    expect(searchValue).toHaveLength(1);
  });
});
