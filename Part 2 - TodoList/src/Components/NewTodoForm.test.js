import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the addTodo function on form submit", function() {
  const addTodoMock = jest.fn();
  const { getByText, getByLabelText } = render(<NewTodoForm addTodo={addTodoMock} />);

  // Add text to the task input before submitting
  const taskInput = getByLabelText("New Todo:");
  fireEvent.change(taskInput, { target: { value: "Test Task" } });

  const createButton = getByText("Add Todo");
  fireEvent.click(createButton);

  expect(addTodoMock).toHaveBeenCalledWith({ id: expect.any(String), task: "Test Task" });
});
