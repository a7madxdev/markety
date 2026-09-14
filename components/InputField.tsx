import { LucideIcon } from "lucide-react";
import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputFieldProps = {
  Icon?: LucideIcon;
} & ComponentPropsWithRef<"input">;

export default function InputField({
  value,
  placeholder,
  className,
  Icon,
}: InputFieldProps) {
  return (
    <div className={twMerge("h-10 rounded-full border border-slate-300 flex")}>
      {Icon && (
        <span className="h-full w-10 flex items-center justify-center text-slate-600">
          <Icon size={20} />
        </span>
      )}
      <input
        className="size-full text-sm"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
