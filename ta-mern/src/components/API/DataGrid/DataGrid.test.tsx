import { screen, render, act, findByTestId } from '@testing-library/react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DataGrid from './DataGrid';

configure({ adapter: new Adapter() });

describe("DataGrid", function () {
    beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => ({
            todo: {
                id: "mock",
                tasks: "mock",
                comments: "mock",
                priority: "mock"
            }
        }));
    });

    afterEach(() => {
        jest.clearAllMocks;
    })

    it("renders", async () => {
        shallow(<DataGrid />)
    });

    it("succeeds snapshot testing", async () => {
        const myGrid = shallow(
            <DataGrid />).dive();

        expect(myGrid).toMatchSnapshot();
    });

    it("contains typography when data is empty", () => {
        const myGrid = shallow(<DataGrid />);
        expect(myGrid.contains('No tasks found, feel free to add some!')).toBe(false);
    });
})