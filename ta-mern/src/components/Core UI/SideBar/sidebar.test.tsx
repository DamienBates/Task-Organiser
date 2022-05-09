import SideBar from "./SideBar"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import renderer from "react-test-renderer"

configure({ adapter: new Adapter() });

describe("sidebar tests", function () {
    test("navlinks display", () => {
        expect(SideBar).toBeDefined();
    });

    test('should render', () => {
        const component = renderer
            .create(
                <MemoryRouter>
                    <SideBar />
                </MemoryRouter>
            )
            .toJSON();

        expect(component).toMatchSnapshot();
    });
})