import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<Header text="hello there" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text into h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);

  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("fancy-h1");
});
