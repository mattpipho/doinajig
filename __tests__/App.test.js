import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

jest.mock("../src/components/OrderDetails", () => () => (
	<div>OrderDetails</div>
));

test("renders Order Details", () => {
	const { container } = render(<App />);
	expect(container.textContent).toMatch("OrderDetails");
});
