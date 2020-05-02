import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Calculator = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 5H7v2h10V5zM7 9h2v2H7V9zM9 13H7v2h2v-2zM7 17h2v2H7v-2zM13 9h-2v2h2V9zM11 13h2v2h-2v-2zM13 17h-2v2h2v-2zM15 9h2v2h-2V9zM17 13h-2v6h2v-6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3a2 2 0 012-2h14a2 2 0 012 2v18a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm2 0h14v18H5V3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Calculator;
