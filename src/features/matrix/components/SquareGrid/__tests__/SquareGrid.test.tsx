import { render, screen, fireEvent } from "@testing-library/react";
import { SquareGrid } from "../index";

describe("SquareGrid Component", () => {
  const mockMatrix = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];
  const mockMatrixSize = 3;
  const mockOnInputChange = jest.fn();

  beforeEach(() => {
    mockOnInputChange.mockClear();
  });

  it("renderiza la cuadrícula con el tamaño correcto", () => {
    render(<SquareGrid matrix={mockMatrix} matrixSize={mockMatrixSize} />);

    const grid = screen.getByRole("grid");
    expect(grid).toHaveStyle({
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
    });
  });

  it("renderiza todos los inputs de la matriz", () => {
    render(<SquareGrid matrix={mockMatrix} matrixSize={mockMatrixSize} />);

    const inputs = screen.getAllByRole("spinbutton");
    expect(inputs).toHaveLength(mockMatrixSize * mockMatrixSize);
  });

  it("renderiza los valores correctos en cada input", () => {
    render(<SquareGrid matrix={mockMatrix} matrixSize={mockMatrixSize} />);

    mockMatrix.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        const input = screen.getByLabelText(
          `Square-input-${rowIndex * mockMatrixSize + colIndex + 1}`
        );
        expect(input).toHaveValue(Number(value));
      });
    });
  });

  it("llama a onInputChange cuando se modifica un input", () => {
    render(
      <SquareGrid
        matrix={mockMatrix}
        matrixSize={mockMatrixSize}
        onInputChange={mockOnInputChange}
      />
    );

    const input = screen.getByLabelText("Square-input-1");
    fireEvent.change(input, { target: { value: "5" } });

    expect(mockOnInputChange).toHaveBeenCalledWith(0, 0, "5");
  });

  it("deshabilita todos los inputs cuando isDisabled es true", () => {
    render(
      <SquareGrid
        matrix={mockMatrix}
        matrixSize={mockMatrixSize}
        isDisabled={true}
      />
    );

    const inputs = screen.getAllByRole("spinbutton");
    inputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it("mantiene los inputs habilitados cuando isDisabled es false", () => {
    render(
      <SquareGrid
        matrix={mockMatrix}
        matrixSize={mockMatrixSize}
        isDisabled={false}
      />
    );

    const inputs = screen.getAllByRole("spinbutton");
    inputs.forEach((input) => {
      expect(input).not.toBeDisabled();
    });
  });

  it("aplica la clase correcta al contenedor", () => {
    render(<SquareGrid matrix={mockMatrix} matrixSize={mockMatrixSize} />);

    const grid = screen.getByRole("grid");
    expect(grid).toHaveClass("square__content");
  });
});
