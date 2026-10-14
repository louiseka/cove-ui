import DialogDemo from "./DialogDemo";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Dialog", () => {
  it("renders the title", () => {
    render(<DialogDemo />);
    expect(screen.getByText("Cancel this booking?"));
  });

  it("renders the description", () => {
    render(<DialogDemo />);
    expect(
      screen.getByText(
        "You'll lose your place on this trip as once confirmed, it can't be undone.",
      ),
    );
  });

  it("renders confirmLabel and dismissLabel", () => {
    render(<DialogDemo />);
    expect(screen.getByText("Keep booking"));
    expect(screen.getByText("Cancel booking"));
  });

  it("opens when button is clicked", async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole("button", { name: "Cancel Booking" }));
    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  it("closes when the dismiss button is clicked", async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole("button", { name: "Cancel Booking" }));
    await user.click(screen.getByRole("button", { name: "Keep booking" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when the close button is clicked", async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole("button", { name: "Cancel Booking" }));
    await user.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

test.todo("closes when Escape is pressed");
test.todo("moves focus into the dialog when opened");
test.todo("returns focus to the trigger when closed");
