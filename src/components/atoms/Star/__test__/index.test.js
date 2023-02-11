/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import Star from "../star";

describe("Star Component", () => {
  it("Renders star correctly", () => {
    const { getByTestId } = render(<Star rating={"4.9"} />);
    const element = getByTestId("star-icon");
    expect(element).toBeInTheDocument();
  });
});
