import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("aplica la variante primary por defecto", () => {
    render(<Button text="Primary Button" />);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass("button__primary");
  });

  it("aplica la variante secondary cuando se especifica", () => {
    render(<Button text="Secondary Button" variant="secondary" />);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("button__secondary");
  });

  it("maneja correctamente el estado disabled", () => {
    render(<Button text="Disabled Button" disabled />);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });

  it("pasa correctamente los props adicionales al botón", () => {
    render(
      <Button
        text="Custom Button"
        data-testid="custom-button"
        onClick={() => {}}
      />
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });
});
