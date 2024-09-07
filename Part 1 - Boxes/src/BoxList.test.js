import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "77", width = "77", color = "#7FFFD4") {
  const heightInput = boxList.getByLabelText("Height (px):");
  const widthInput = boxList.getByLabelText("Width (px):");
  const backgroundInput = boxList.getByLabelText("Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const boxList = render(<BoxList />);

  // no boxes yet
  expect(boxList.queryByText("Remove")).not.toBeInTheDocument();

  addBox(boxList);

  // expect to see a box
  const removeButton = boxList.getByText("Remove");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 77px;
    height: 77px;
    background-color: #7FFFD4;
  `);

  // expect form to be reset to initial values
  expect(boxList.getByLabelText("Color:").value).toBe("#d3d3d3"); // color reset to light gray
  expect(boxList.getByLabelText("Width (px):").value).toBe("50"); // width reset to 50
  expect(boxList.getByLabelText("Height (px):").value).toBe("50"); // height reset to 50
  
});

it("can remove a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("Remove");

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
