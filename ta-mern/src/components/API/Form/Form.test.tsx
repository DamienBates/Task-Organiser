import Form from "./Form";
import { render } from '@testing-library/react';

describe("form", function () {
    test("displays text and form", () => {
        render(<Form />)
    });
})