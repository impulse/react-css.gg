import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Drive = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 11a1 1 0 100 2 1 1 0 000-2zM14 12a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a2 2 0 00-2 2v4a2 2 0 002 2h20a2 2 0 002-2v-4a2 2 0 00-2-2H2zm20 2H2v4h20v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Drive;
