import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Key = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 8a3 3 0 00-3 3v2a3 3 0 106 0h6v2h2v-2h1v2h2v-4H9a3 3 0 00-3-3zm1 5v-2a1 1 0 10-2 0v2a1 1 0 102 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Key;
