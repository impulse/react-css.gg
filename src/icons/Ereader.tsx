import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ereader = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 7a1 1 0 100 2h3a1 1 0 100-2h-3zM15 12a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zM16 15a1 1 0 100 2h3a1 1 0 100-2h-3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3H3zm18 2h-8v14h8a1 1 0 001-1V6a1 1 0 00-1-1zM3 5h8v14H3a1 1 0 01-1-1V6a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ereader;
