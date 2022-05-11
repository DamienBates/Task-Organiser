import DataGrid from "./DataGrid"
import { render } from '@testing-library/react';

describe("DataGrid", function () {
    test("displays table", () => {
        render(<DataGrid />)
    });
})