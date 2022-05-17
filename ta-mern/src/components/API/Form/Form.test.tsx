import { shallow, configure } from "enzyme";
import { fireEvent, queryByDisplayValue, render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Form from "./Form";

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
        todo: {
            id: "form-mock",
            tasks: "form-mock",
            comments: "form-mock",
            priority: "form-mock"
        }
    }));
});

afterEach(() => {
    jest.clearAllMocks;
})

describe("Form", function () {
    it("renders correctly", async () => {
        shallow(<Form />);
    });

    it("initial snapshot matches", () => {
        const component = shallow(<Form />);

        expect(component.getElements()).toMatchSnapshot();
    });

    it("contains placeholder", () => {
        const myGrid = shallow(<Form />);
        expect(myGrid.contains('How urgent?')).toBe(true);
    })
});