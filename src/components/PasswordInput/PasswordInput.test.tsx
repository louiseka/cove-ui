import PasswordInput from "./PasswordInput";

import { render, screen } from "@testing-library/react";

describe("PasswordInput", () => {
  it("renders children correctly", () => {
    render(
      <PasswordInput id="password" name="password" required>
        Your Password
      </PasswordInput>,
    );
    expect(screen.getByText("Your Password")).toBeInTheDocument();
  });

  test.todo("renders a password input by default");
  test.todo("is required when required prop is true");
  test.todo("shows the show password button when showToggle is true");
  test.todo("changes to type text when show password is clicked");
});
