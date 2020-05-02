import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 13.004l-6-.013-.01 4 6 .013.01-4z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.978 18.002l.026-12-2-.004-.026 12 2 .004zM3.996 10.985l12 .026.009-4-12-.026-.009 4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default AlignRight;
