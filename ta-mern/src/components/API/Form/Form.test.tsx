import Form from "./Form";
import { render, fireEvent } from '@testing-library/react';



// Enzyme.configure({ adapter: new Adapter() })

describe("form", function () {
    test("displays text and form", () => {
        render(<Form />)
    });
})