import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Performance = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 9v4.17a3.001 3.001 0 102 0V9h-2zm0 7a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        d="M12 5a7 7 0 017 7v1h-2v-1a5 5 0 00-10 0v1H5v-1a7 7 0 017-7z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Performance;
