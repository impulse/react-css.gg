import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Linear = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3.035 12.943a8.963 8.963 0 002.587 5.421 8.963 8.963 0 005.42 2.587l-8.007-8.008zM3 11.494l9.492 9.492a9.016 9.016 0 002.378-.459L3.46 9.115A9.016 9.016 0 003 11.494zM3.867 8.11l12.009 12.009a8.948 8.948 0 001.773-1.123L4.99 6.336A8.95 8.95 0 003.867 8.11zM5.663 5.595a9 9 0 0112.728 12.728L5.663 5.595z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Linear;
