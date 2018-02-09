import React from "react";
import { shallow } from "enzyme";
import Searchbar from "./Searchbar";

test("<Searchbar /> renders the input", () => {
  const wrapper = shallow(<Searchbar />);

  const mockedEvent = { target: { value: "trui" } };

  expect(wrapper.find(".Search-text").length).toBe(1);
  wrapper.find(".Search-text").simulate("change", mockedEvent);
});
