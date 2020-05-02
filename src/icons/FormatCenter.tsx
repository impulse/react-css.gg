import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatCenter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zM4 13a1 1 0 100 2h16a1 1 0 100-2H4zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 17a1 1 0 100 2h10a1 1 0 100-2H7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FormatCenter;
