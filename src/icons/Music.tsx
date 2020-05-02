import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Music = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M22 6a4 4 0 00-4.608-3.953l-7 1.077A4 4 0 007 7.078v8.763a3.5 3.5 0 102 3.163V7.078A2 2 0 0110.696 5.1l7-1.077A2 2 0 0120 6.001v6.84a3.5 3.5 0 102 3.163V6.001zm-2 10.004a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-13 3a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Music;
