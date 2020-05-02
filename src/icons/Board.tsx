import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Board = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 4a4 4 0 00-4 4v8a4 4 0 004 4h12a4 4 0 004-4V8a4 4 0 00-4-4H6zm8 2h-4v12h4V6zm2 0v12h2a2 2 0 002-2V8a2 2 0 00-2-2h-2zM6 18h2V6H6a2 2 0 00-2 2v8a2 2 0 002 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Board;
