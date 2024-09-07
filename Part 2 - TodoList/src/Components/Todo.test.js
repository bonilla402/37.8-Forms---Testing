import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";


it("renders without crashing", function() {
  render(<Todo todo={{ id: "123", task: "Sample Task" }} />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Todo todo={{ id: "123", task: "Sample Task" }} />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the removeTodo function on button click", function() {
  const removeMock = jest.fn();
  const { getByText } = render(<Todo todo={{ id: "123", task: "Sample Task" }} removeTodo={removeMock} />);
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);

  // Check that removeTodo was called with the correct id
  expect(removeMock).toHaveBeenCalledWith("123");
});
