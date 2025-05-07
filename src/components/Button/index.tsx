import clsx from "clsx";
import styles from "./Button.module.scss";

type VariantType = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: VariantType;
}

export const Button = ({ text, variant = "primary", ...rest }: ButtonProps) => {
  const buttonClass = clsx(styles.button, {
    [styles.button__primary]: variant === "primary",
    [styles.button__secondary]: variant === "secondary",
  });

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};
