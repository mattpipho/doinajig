import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageSelection from "../../src/components/ImageSelection";

test("renders Order Details Header", () => {
	render(<ImageSelection />);
	const imageLabel = screen.getByText(/Background Image/i);
	expect(imageLabel).toBeInTheDocument();
});
