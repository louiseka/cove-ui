import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

const items = [
  {
    title: "How long does the tour last?",
    content: "Most tours last between two and four hours.",
  },
  {
    title: "What should I bring?",
    content: "Bring sunscreen and water.",
  },
];

describe("Accordion", () => {
  it("renders the heading", () => {
    render(<Accordion heading="Frequently Asked Questions" items={items} />);
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });

  it("renders all accordion titles", () => {
    render(<Accordion heading="Frequently Asked Questions" items={items} />);

    expect(
      screen.getByText("How long does the tour last?"),
    ).toBeInTheDocument();

    expect(screen.getByText("What should I bring?")).toBeInTheDocument();
  });

  it("renders all accordion content", () => {
    render(<Accordion heading="Frequently Asked Questions" items={items} />);

    expect(
      screen.getByText("Most tours last between two and four hours."),
    ).toBeInTheDocument();

    expect(screen.getByText("Bring sunscreen and water.")).toBeInTheDocument();
  });
});
