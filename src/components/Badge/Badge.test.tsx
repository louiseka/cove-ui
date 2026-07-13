import Badge from "./Badge";

import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("renders children correctly", () => {
    render(<Badge variant="success">Complete</Badge>);

    expect(screen.getByText("Complete")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Badge variant="danger">Failed</Badge>);

    const badge = screen.getByText("Failed");
    expect(badge.className).toMatch(/danger/);
  });

  it("renders an icon when withIcon is true", () => {
    render(
      <Badge variant="success" withIcon>
        Complete
      </Badge>,
    );

    const badge = screen.getByText("Complete").closest("span");
    expect(badge?.querySelector("svg")).toBeInTheDocument();
  });

  it("does not render an icon when withIcon is false", () => {
    render(<Badge variant="success">Complete</Badge>);

    const badge = screen.getByText("Complete").closest("span");
    expect(badge?.querySelector("svg")).not.toBeInTheDocument();
  });

  it("does not set aria-live by default", () => {
    render(<Badge variant="success">Complete</Badge>);

    const badge = screen.getByText("Complete");
    expect(badge).not.toHaveAttribute("aria-live");
  });

  it("applies aria-live when the live prop is set", () => {
    render(
      <Badge variant="warning" live="polite">
        Processing
      </Badge>,
    );

    const badge = screen.getByText("Processing");
    expect(badge).toHaveAttribute("aria-live", "polite");
  });
});
