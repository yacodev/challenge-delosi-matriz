import { SquareInput } from "@/components";

import styles from "./SquaredGrid.module.scss";

interface SquareGridProps {
  matrix: string[][];
  matrixSize: number;
  onInputChange?: (rowIndex: number, colIndex: number, value: string) => void;
  isDisabled?: boolean;
}

export const SquareGrid = ({
  matrix,
  matrixSize,
  onInputChange,
  isDisabled,
}: SquareGridProps) => {
  const handleInputChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    if (onInputChange) {
      onInputChange(rowIndex, colIndex, value);
    }
  };

  return (
    <div
      className={styles.square__content}
      style={{
        gridTemplateColumns: `repeat(${matrixSize}, 1fr)`,
        gridTemplateRows: `repeat(${matrixSize}, 1fr)`,
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <SquareInput
            key={`${rowIndex}-${colIndex}`}
            aria-label={`Square-input-${rowIndex * matrixSize + colIndex + 1}`}
            onChange={(e) =>
              handleInputChange(rowIndex, colIndex, e.target.value)
            }
            value={value}
            disabled={isDisabled}
          />
        ))
      )}
    </div>
  );
};
