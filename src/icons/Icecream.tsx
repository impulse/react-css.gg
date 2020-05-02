import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Icecream = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 17h4V8A7 7 0 105 8v9h4v3a3 3 0 106 0v-3zm2-2V8A5 5 0 007 8v7h4v5a1 1 0 102 0v-5h4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Icecream;
