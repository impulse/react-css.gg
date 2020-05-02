import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CardSpades = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.146 11.707a2 2 0 002.829 2.829L12 14.51l.025.026a2 2 0 102.829-2.829L12.024 8.88 12 8.904l-.025-.025-2.829 2.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20a3 3 0 003 3h12a3 3 0 003-3V4a3 3 0 00-3-3H6a3 3 0 00-3 3v16zm3 1h12a1 1 0 001-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1v16a1 1 0 001 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CardSpades;
