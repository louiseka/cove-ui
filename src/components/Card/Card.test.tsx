import Card from "./Card";
import oceanImage from "../../assets/images/ocean.webp";

import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("renders an image and alt text", () => {
    render(
      <Card
        img={oceanImage}
        imgAlt="Close up of the blue ocean"
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        buttonText="Book Ocean Tour"
      />,
    );
    const image = screen.getByRole("img", {
      name: /close up of the blue ocean/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", oceanImage);
    expect(image).toHaveAttribute("alt", "Close up of the blue ocean");
  });

  it("renders title and description", () => {
    render(
      <Card
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        buttonText="Book Ocean Tour"
      />,
    );
    const title = screen.getByRole("heading", {
      level: 3,
      name: /blue ocean/i,
    });

    const description = screen.getByText(
      /this is the ocean and this is a long long long description about how blue it is\./i,
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(
      <Card
        img={oceanImage}
        imgAlt="Close up of the blue ocean"
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        buttonText="Book Ocean Tour"
      />,
    );
    const button = screen.getByRole("button", {
      name: /book ocean tour/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(
      <Card
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        link="#"
        linkText="Learn more about oceans"
      />,
    );
    const link = screen.getByRole("link", {
      name: /learn more about oceans/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });

  it("does not render image when img is not provided", () => {
    render(
      <Card
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        link="#"
        linkText="Learn more about oceans"
      />,
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("does not render button when buttonText is not provided", () => {
    render(
      <Card
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        link="#"
        linkText="Learn more about oceans"
      />,
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("does not render link when linkText is not provided", () => {
    render(
      <Card
        title="Blue Ocean"
        description="This is the ocean and this is a long long long description about how blue it is."
        buttonText="Book Ocean Tour"
      />,
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
