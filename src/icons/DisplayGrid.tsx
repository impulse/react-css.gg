import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DisplayGrid = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 7v4h4V7H7zM13 7h4v4h-4V7zM13 13v4h4v-4h-4zM7 13h4v4H7v-4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3h18v18H3V3zm2 2v14h14V5H5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default DisplayGrid;
