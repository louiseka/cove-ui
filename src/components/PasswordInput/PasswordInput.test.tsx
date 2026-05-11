import PasswordInput from "./PasswordInput";

import userEvent from "@testing-library/user-event";
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

  it("renders a password input by default", () => {
    render(
      <PasswordInput id="password" name="password" required>
        Your Password
      </PasswordInput>,
    );
    const passwordInput = screen.getByLabelText("Your Password (Required)");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("is required when required prop is true", () => {
    render(
      <PasswordInput id="password" name="password" required>
        Your Password
      </PasswordInput>,
    );
    const passwordInput = screen.getByLabelText("Your Password (Required)");
    expect(passwordInput).toBeRequired();
  });

  it("shows the show password button when showToggle is true", () => {
    render(
      <PasswordInput id="show-password" name="show-password" showToggle>
        Your Password
      </PasswordInput>,
    );
    expect(
      screen.getByRole("button", {
        name: /show password/i,
      }),
    ).toBeInTheDocument();
  });

  it("changes to type text when show password is clicked", async () => {
    const user = userEvent.setup();
    render(
      <PasswordInput id="show-password" name="show-password" showToggle>
        Your Password
      </PasswordInput>,
    );
    const passwordInput = screen.getByLabelText(/your password/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    const button = screen.getByRole("button", {
      name: /show password/i,
    });
    await user.click(button);
    expect(passwordInput).toHaveAttribute("type", "text");
  });
});
