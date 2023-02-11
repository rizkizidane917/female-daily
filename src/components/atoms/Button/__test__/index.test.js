/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Button Component", () => {
  it("Should be onClick", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button variant="primary" onClick={handleClick}>
        Click
      </Button>
    );
    const button = getByText("Click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("Should be disabled", () => {
    const { getByRole } = render(<Button disabled={true}>disabled</Button>);
    const button = getByRole("button");
    expect(button).toBeDisabled();
  });
  it("Should be variant primary", () => {
    const { getByRole } = render(<Button variant="primary">primary</Button>);
    const button = getByRole("button");
    expect(button).toHaveClass("bg-primary hover:bg-primary/90 text-white");
  });
  it("Should be variant custom", () => {
    const { getByRole } = render(
      <Button variant="custom" className="bg-blue-100">
        custom
      </Button>
    );
    const button = getByRole("button");
    expect(button).toHaveClass("bg-blue-100");
  });
});
