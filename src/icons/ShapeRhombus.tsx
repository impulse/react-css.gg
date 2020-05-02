import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeRhombus = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 6.343L6.343 12 12 17.657 17.657 12 12 6.343zM2.1 12l9.9 9.9 9.9-9.9L12 2.1 2.1 12z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ShapeRhombus;
