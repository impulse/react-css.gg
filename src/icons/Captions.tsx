import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Captions = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 8v2H8v4h3v2H6V8h5zM18 8v2h-3v4h3v2h-5V8h5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 13V6h16v12H4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Captions;
