import React from "react";
import { shallow } from "enzyme";
import DynamicForm from "./index";
import { fetchDonationFields, makeDonationFields } from "../../constants";

describe("Form snapshot renders", () => {
  it("should render makeDonation form correctly", () => {
    const component = shallow(<DynamicForm fields={makeDonationFields} />);

    expect(component).toMatchSnapshot();
  });
  it("should render fetchDonation form correctly", () => {
    const component = shallow(<DynamicForm fields={fetchDonationFields} />);

    expect(component).toMatchSnapshot();
  });
});
