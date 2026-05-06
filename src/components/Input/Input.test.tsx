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

  test.todo("uses default props");
  test.todo("is required when required prop is true");
  test.todo("it shows required text in label when required");
  test.todo("it applies the correct input type");
  test.todo("renders input with correct id, name, and type");
  test.todo("associates label with input via htmlFor");
  test.todo("it applies pattern attribute when provided");
});
