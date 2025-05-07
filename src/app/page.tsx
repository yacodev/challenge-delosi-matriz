"use client";
import { Button } from "../components";
import { SquareGrid } from "../features/matrix/components/";
import { MIN_NUM_MATRIX_SIZE } from "../features/matrix/constants";
import { useMatrix } from "../features/matrix/hooks";

import styles from "./page.module.scss";

export default function Home() {
  const {
    handleAddFields,
    handleRemoveFields,
    handleResetFields,
    matrixValues,
    matrixSize,
    handleInputChange,
    rotatedMatrix,
    handleRotateMatrix,
  } = useMatrix(MIN_NUM_MATRIX_SIZE);

  const disabledButtonRotate = rotatedMatrix.length !== 0;
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>
        App para girar una matriz 90° en sentido antihorario.
      </h1>

      <span>
        Este es un ejemplo de una aplicación que permite girar una matriz 90° en
        sentido antihorario. La matriz se representa como una cuadrícula de
        entradas, donde cada entrada puede ser editada por el usuario. Al hacer
        clic en el botón <b>Agregar un campo</b>, se puede aumentar el tamaño de
        la matriz, y al hacer clic en <b>Quitar un campo</b> se puede reducir el
        tamaño de la matriz. El botón <b>Restaurar</b> restablece la matriz a su
        tamaño original. La matriz girada se muestra en la parte derecha de la
        cuadrícula.
      </span>

      <div className={styles.square__controls}>
        <Button text="Agregar un campo" onClick={handleAddFields} />

        <Button text="Quitar un campo" onClick={handleRemoveFields} />

        <Button
          text="Restaurar"
          variant="secondary"
          onClick={handleResetFields}
        />
      </div>

      <div className={styles.square__container}>
        <SquareGrid
          matrix={matrixValues}
          matrixSize={matrixSize}
          onInputChange={handleInputChange}
        />
      </div>

      <div className={styles.square__controls}>
        <Button
          text="Rotar Matriz"
          onClick={handleRotateMatrix}
          disabled={disabledButtonRotate}
        />
      </div>

      <div className={styles.square__container}>
        <SquareGrid matrix={rotatedMatrix} matrixSize={matrixSize} isDisabled />
      </div>
    </main>
  );
}
