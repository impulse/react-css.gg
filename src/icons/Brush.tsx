import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Brush = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11h3a1 1 0 011 1v6a3 3 0 01-3 3H8a3 3 0 01-3-3v-6a1 1 0 011-1h3V6a3 3 0 116 0v5zm-2-5a1 1 0 10-2 0v7H7v5a1 1 0 001 1h1v-3h2v3h2v-3h2v3h1a1 1 0 001-1v-5h-4V6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Brush;
