import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zM4 9a1 1 0 000 2h8a1 1 0 100-2H4zM3 14a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h8a1 1 0 100-2H4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FormatLeft;
