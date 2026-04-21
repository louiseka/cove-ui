import Button from "./Button";

import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders children correctly", () => {
    render(
      <Button type="button" variant="primary">
        Click me
      </Button>,
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
