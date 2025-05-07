import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SquareInput } from "../index";

describe("SquareInput Component", () => {
  it("renderiza el input con el tipo por defecto (number)", () => {
    render(<SquareInput />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  it("renderiza el input con tipo text cuando se especifica", () => {
    render(<SquareInput type="text" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("aplica la clase correcta", () => {
    render(<SquareInput />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("square__input");
  });

  it("tiene un maxLength de 3 caracteres", () => {
    render(<SquareInput />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("maxLength", "3");
  });

  it("maneja correctamente el valor ingresado", async () => {
    render(<SquareInput />);
    const input = screen.getByRole("spinbutton");
    await userEvent.type(input, "123");
    expect(input).toHaveValue(123);
  });

  it("pasa correctamente los props adicionales", () => {
    render(
      <SquareInput
        data-testid="custom-input"
        placeholder="Ingrese un número"
        disabled
      />
    );
    const input = screen.getByTestId("custom-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Ingrese un número");
    expect(input).toBeDisabled();
  });
});
