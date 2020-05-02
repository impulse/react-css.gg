import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Password = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M6 12a1 1 0 11-2 0 1 1 0 012 0zM9 13a1 1 0 100-2 1 1 0 000 2zM14 12a1 1 0 11-2 0 1 1 0 012 0zM20 11h-4v2h4v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a2 2 0 00-2 2v8a2 2 0 002 2h20a2 2 0 002-2V8a2 2 0 00-2-2H2zm20 2H2v8h20V8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Password;
