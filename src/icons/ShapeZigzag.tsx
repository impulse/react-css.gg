import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeZigzag = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2.312 9L1 10.51l3.774 3.28 1.509 1.312 1.312-1.51 1.54-1.77 2.264 1.968 1.51 1.312 1.311-1.51 1.538-1.769 2.263 1.967 1.51 1.312 1.311-1.51 1.969-2.264-1.51-1.312-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016-1.968 2.264L2.312 9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ShapeZigzag;
