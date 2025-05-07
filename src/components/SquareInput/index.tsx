import { InputHTMLAttributes } from "react";
import styles from "./SquareInput.module.scss";

interface SquareInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number";
}

export const SquareInput = ({ type = "number", ...rest }: SquareInputProps) => {
  return (
    <input
      type={type}
      className={styles.square__input}
      maxLength={3}
      {...rest}
    />
  );
};
