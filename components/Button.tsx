import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  theme?: "default" | "primary";
  size?: "small" | "normal";
} & ComponentPropsWithRef<"button">;

const themes = {
  default: "bg-slate-600 text-white",
  primary: "bg-emerald-600 text-white font-bold",
};
const sizes = {
  small: "",
  normal: "h-10 px-6 text-sm",
};

function Button({
  children,
  className,
  theme = "default",
  size = "normal",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-full duration-150 hover:scale-96",
        className,
        themes[theme],
        sizes[size],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
