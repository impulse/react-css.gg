import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Trash = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 5V4a2 2 0 00-2-2H9a2 2 0 00-2 2v1H4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V7h1a1 1 0 100-2h-3zm-2-1H9v1h6V4zm2 3H7v11a1 1 0 001 1h8a1 1 0 001-1V7z"
        fill="currentColor"
      />
      <path d="M9 9h2v8H9V9zM13 9h2v8h-2V9z" fill="currentColor" />
    </svg>
  );
});
export default Trash;
