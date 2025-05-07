import { renderHook, act } from "@testing-library/react";
import { useMatrix } from "../useMatrix";
import { fillMatrix } from "../../utils";
import { MAX_NUM_MATRIX_SIZE } from "../../constants";

jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("useMatrix Hook", () => {
  const initialSize = 3;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("inicializa con el tamaño y valores correctos", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    expect(result.current.matrixSize).toBe(initialSize);
    expect(result.current.matrixValues).toEqual(fillMatrix(initialSize));
    expect(result.current.rotatedMatrix).toEqual([]);
  });

  it("agrega una fila y columna correctamente", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    act(() => {
      result.current.handleAddFields();
    });

    expect(result.current.matrixSize).toBe(initialSize + 1);
    expect(result.current.matrixValues.length).toBe(initialSize + 1);
    expect(result.current.matrixValues[0].length).toBe(initialSize + 1);
  });

  it("no agrega campos cuando se alcanza el tamaño máximo", () => {
    const { result } = renderHook(() => useMatrix(MAX_NUM_MATRIX_SIZE));

    act(() => {
      result.current.handleAddFields();
    });

    expect(result.current.matrixSize).toBe(MAX_NUM_MATRIX_SIZE);
  });

  it("elimina una fila y columna correctamente", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    act(() => {
      result.current.handleAddFields();
    });

    act(() => {
      result.current.handleRemoveFields();
    });

    expect(result.current.matrixSize).toBe(initialSize);
    expect(result.current.matrixValues.length).toBe(initialSize);
    expect(result.current.matrixValues[0].length).toBe(initialSize);
  });

  it("no elimina campos cuando se alcanza el tamaño inicial", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    act(() => {
      result.current.handleRemoveFields();
    });

    expect(result.current.matrixSize).toBe(initialSize);
  });

  it("resetea los campos al tamaño inicial", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    act(() => {
      result.current.handleAddFields();
    });

    act(() => {
      result.current.handleResetFields();
    });

    expect(result.current.matrixSize).toBe(initialSize);
    expect(result.current.matrixValues).toEqual(fillMatrix(initialSize));
  });

  it("actualiza el valor de un campo específico", () => {
    const { result } = renderHook(() => useMatrix(initialSize));
    const newValue = "5";

    act(() => {
      result.current.handleInputChange(0, 0, newValue);
    });

    expect(result.current.matrixValues[0][0]).toBe(newValue);
  });

  it("rota la matriz correctamente", () => {
    const { result } = renderHook(() => useMatrix(initialSize));
    const testMatrix = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];

    act(() => {
      testMatrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          result.current.handleInputChange(rowIndex, colIndex, value);
        });
      });
    });
    act(() => {
      result.current.handleRotateMatrix();
    });

    expect(result.current.rotatedMatrix).toEqual([
      ["3", "6", "9"],
      ["2", "5", "8"],
      ["1", "4", "7"],
    ]);
  });

  it("resetea la matriz rotada cuando se modifican los campos", () => {
    const { result } = renderHook(() => useMatrix(initialSize));

    act(() => {
      result.current.handleRotateMatrix();
    });

    act(() => {
      result.current.handleAddFields();
    });

    expect(result.current.rotatedMatrix).toEqual([]);
  });
});
