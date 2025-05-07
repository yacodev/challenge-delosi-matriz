import { useState } from "react";
import { toast } from "sonner";

import { fillMatrix } from "../utils";
import { MAX_NUM_MATRIX_SIZE } from "../constants";

export const useMatrix = (initialSize: number) => {
  const [matrixSize, setMatrixSize] = useState(initialSize);
  const [matrixValues, setMatrixValues] = useState<string[][]>(
    fillMatrix(matrixSize)
  );
  const [rotatedMatrix, setRotatedMatrix] = useState<string[][]>([]);

  const handleAddFields = () => {
    if (matrixSize >= MAX_NUM_MATRIX_SIZE) {
      toast.error("No se puede agregar mas campos!");
      return;
    }

    resetRotatedMatrix();
    setMatrixSize((prevSize) => prevSize + 1);
    setMatrixValues((prevValues) => [
      ...prevValues.map((row) => [...row, ""]),
      Array(prevValues.length + 1).fill(""),
    ]);
  };

  const handleRemoveFields = () => {
    if (matrixSize <= initialSize) {
      return;
    }
    resetRotatedMatrix();
    setMatrixSize((prevSize) => prevSize - 1);
    setMatrixValues((prevValues) => {
      const newValues = prevValues.slice(0, -1).map((row) => row.slice(0, -1));
      return newValues;
    });
  };

  const handleResetFields = () => {
    setMatrixSize(initialSize);
    setMatrixValues(fillMatrix(initialSize));
    resetRotatedMatrix();
  };

  const handleInputChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    setMatrixValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[rowIndex][colIndex] = value;

      return newValues;
    });
  };

  const handleRotateMatrix = () => {
    const matrixLength = matrixValues.length;

    const rotatedMatrix = fillMatrix(matrixLength);

    for (let row = 0; row < matrixLength; row++) {
      for (let col = 0; col < matrixLength; col++) {
        rotatedMatrix[matrixLength - col - 1][row] = matrixValues[row][col];
      }
    }

    setRotatedMatrix(rotatedMatrix);
  };

  const resetRotatedMatrix = () => {
    setRotatedMatrix([]);
  };

  return {
    matrixValues,
    matrixSize,
    rotatedMatrix,
    handleAddFields,
    handleRemoveFields,
    handleResetFields,
    handleInputChange,
    handleRotateMatrix,
  };
};
