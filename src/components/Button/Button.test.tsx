import Button from "./Button";

import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders children correctly", () => {
    render(
      <Button type="button" variant="primary">
        Button Text
      </Button>,
    );

    expect(screen.getByText("Button Text")).toBeInTheDocument();
  });

  it("uses default props", () => {
    render(
      <Button type="button" variant="primary">
        Click me
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toBeDisabled();
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Button disabled type="button" variant="primary">
        Button Text
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when loading", () => {
    render(
      <Button loading type="button" variant="primary">
        Button Text
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows loading text when loading", () => {
    render(
      <Button loading type="button" variant="primary">
        Button Text
      </Button>,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(
      <Button variant="secondary" type="button">
        Button Text
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/secondary/);
  });

  it("applies the correct type attribute", () => {
    render(
      <Button type="submit" variant="primary">
        Button Text
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
