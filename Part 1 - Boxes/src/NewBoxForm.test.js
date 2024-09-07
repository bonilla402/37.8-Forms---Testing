import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Mock function for addBox
const mockAddBox = jest.fn();

it("renders without crashing", function() {
  render(<NewBoxForm addBox={mockAddBox} />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewBoxForm addBox={mockAddBox} />);
  expect(asFragment()).toMatchSnapshot();
});
