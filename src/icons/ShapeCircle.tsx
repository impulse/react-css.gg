import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeCircle = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 3a8 8 0 100-16 8 8 0 000 16z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ShapeCircle;
