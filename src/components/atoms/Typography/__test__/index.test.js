/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import Typography from "..";

describe("Text Component", () => {
  it("Renders text correctly", () => {
    const text = "Testing";
    const { getByText } = render(<Typography type="h1">{text}</Typography>);
    const element = getByText(text);
    expect(element).toBeInTheDocument();
  });
  it("Renders text type heading", () => {
    const { getByRole } = render(<Typography type="h1">text h1</Typography>);
    const element = getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
