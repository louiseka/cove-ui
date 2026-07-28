import Select from "./Select";

import { render, screen, fireEvent } from "@testing-library/react";

const options = [
  { value: "spain", label: "Spain" },
  { value: "italy", label: "Italy" },
];

describe("Select", () => {
  it("renders a label correctly", () => {
    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={() => {}}
        options={options}
      />,
    );
    expect(screen.getByText("Choose a destination:")).toBeInTheDocument();
  });

  it("renders the options", () => {
    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={() => {}}
        options={options}
      />,
    );
    expect(screen.getByText("Spain")).toBeInTheDocument();
    expect(screen.getByText("Italy")).toBeInTheDocument();
  });

  it("associates label with input via htmlFor", () => {
    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={() => {}}
        options={options}
      />,
    );
    const input = screen.getByLabelText("Choose a destination:");
    const label = screen.getByText("Choose a destination:").closest("label");

    expect(label).toHaveAttribute("for", "destination");
    expect(input).toHaveAttribute("id", "destination");
  });

  it("is disabled when disabled is true", () => {
    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={() => {}}
        options={options}
        disabled
      />,
    );
    expect(screen.getByLabelText("Choose a destination:")).toBeDisabled();
  });

  it("shows error message when error is true", () => {
    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={() => {}}
        options={options}
        error
        errorMessage="Please select a destination"
      />,
    );

    expect(screen.getByText("Please select a destination")).toBeInTheDocument();
  });

  it("calls onChange with the new value when an option is selected", () => {
    const handleChange = vi.fn();

    render(
      <Select
        label="Choose a destination"
        selectName="destination"
        value="spain"
        onChange={handleChange}
        options={options}
      />,
    );

    fireEvent.change(screen.getByLabelText("Choose a destination:"), {
      target: { value: "italy" },
    });

    expect(handleChange).toHaveBeenCalledWith("italy");
  });
});
