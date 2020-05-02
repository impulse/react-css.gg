import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Cast = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20 6H4v2H2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-5v-2h5V6zM2 13a7 7 0 017 7H7a5 5 0 00-5-5v-2zM2 17a3 3 0 013 3H2v-3z"
        fill="currentColor"
      />
      <path
        d="M2 9c6.075 0 11 4.925 11 11h-2a9 9 0 00-9-9V9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Cast;
