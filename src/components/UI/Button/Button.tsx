import React from "react";

import classes from "./Button.module.scss";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: any;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
