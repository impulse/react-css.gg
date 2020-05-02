import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Comment = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M17 9H7V7h10v2zM7 13h10v-2H7v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 18V2h20v16h-6v4h-2a4 4 0 01-4-4H2zm10-2v2a2 2 0 002 2v-4h6V4H4v12h8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Comment;
