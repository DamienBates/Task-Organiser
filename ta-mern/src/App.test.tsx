import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

describe("DataGrid", function () {
    beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => ({
            todo: {
                id: "App-mock",
                tasks: "App-mock",
                comments: "App-mock",
                priority: "App-mock"
            }
        }));
    });

    afterEach(() => {
        jest.clearAllMocks;
    })

    it("renders", async () => {
        shallow(<App />)
    });

    it("succeeds snapshot testing", async () => {
        const myGrid = shallow(
            <App />).dive();

        expect(myGrid).toMatchSnapshot();
    })
});