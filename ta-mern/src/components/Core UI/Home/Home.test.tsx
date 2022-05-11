import Home from "./Home"
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe("home page", function () {
    test("text displays", () => {
        expect(Home).toBeDefined();
    });

    test("renders without crashing", () => {
        const tree = renderer
            .create(<Home />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})