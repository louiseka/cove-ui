import Input from "../Input/Input";

import { render, screen } from "@testing-library/react";

describe("Input", () => {
  it("renders children correctly", () => {
    render(
      <Input id="first-name" name="first-name" type="text">
        First Name
      </Input>,
    );
    expect(screen.getByText("First Name")).toBeInTheDocument();
  });

  it("uses default props", () => {
    render(
      <Input id="default" name="default" type="text">
        Default
      </Input>,
    );

    const input = screen.getByLabelText("Default");

    expect(input).not.toBeRequired();
    expect(screen.queryByText("(Required)")).not.toBeInTheDocument();
  });

  it("is required when required prop is true", () => {
    render(
      <Input id="email" name="email" type="email" required>
        Email Address
      </Input>,
    );
    const input = screen.getByLabelText(/email address/i);

    expect(input).toBeRequired();
  });

  it("shows required text in label when required", () => {
    render(
      <Input id="email" name="email" type="email" required>
        Email Address
      </Input>,
    );
    expect(screen.getByText("(Required)")).toBeInTheDocument();
  });

  it("applies the correct input type", () => {
    render(
      <Input id="quantity" name="quantity" type="number">
        Quantity
      </Input>,
    );
    const input = screen.getByLabelText("Quantity");
    expect(input).toHaveAttribute("type", "number");
  });

  it("renders input with correct id, name, and type", () => {
    render(
      <Input id="quantity" name="quantity" type="number">
        Quantity
      </Input>,
    );
    const input = screen.getByLabelText("Quantity");

    expect(input).toHaveAttribute("id", "quantity");
    expect(input).toHaveAttribute("name", "quantity");
    expect(input).toHaveAttribute("type", "number");
  });

  it("associates label with input via htmlFor", () => {
    render(
      <Input id="last-name" name="last-name" type="text">
        Last Name
      </Input>,
    );

    const input = screen.getByLabelText("Last Name");
    const label = screen.getByText("Last Name").closest("label");

    expect(label).toHaveAttribute("for", "last-name");
    expect(input).toHaveAttribute("id", "last-name");
  });

  it("applies pattern attribute when provided", () => {
    render(
      <Input
        id="email-address"
        name="email-address"
        type="email"
        pattern=".+@example\.com"
      >
        Email Address
      </Input>,
    );
    const input = screen.getByLabelText("Email Address");
    expect(input).toHaveAttribute("pattern", ".+@example\\.com");
  });
});
