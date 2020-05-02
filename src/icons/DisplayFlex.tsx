import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DisplayFlex = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M6 17V7h2v10H6zM16 7v10h2V7h-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3h20v18H2V3zm2 2v14h16V5H4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default DisplayFlex;
