import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Mouse = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 5a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a8 8 0 1116 0v8a8 8 0 11-16 0V8zm14 0v8a6 6 0 01-12 0V8a6 6 0 1112 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Mouse;
