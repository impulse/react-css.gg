import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const OpenCollective = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M16.682 15.753l2.13 2.13A8.965 8.965 0 0021 12a8.964 8.964 0 00-2.123-5.806l-2.133 2.133A5.974 5.974 0 0118 12c0 1.42-.493 2.725-1.318 3.753z"
          fill="currentColor"
          fillOpacity={0.5}
        />
        <path
          d="M15.673 16.744a6 6 0 11.08-9.426l2.13-2.13a9 9 0 10-.077 13.689l-2.133-2.133z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default OpenCollective;
