import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Hello = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.5 12a5.485 5.485 0 01-1.725 4A5.481 5.481 0 0112 17.5c-1.461 0-2.79-.57-3.775-1.5A5.485 5.485 0 016.5 12h11z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 7a6 6 0 016-6h10a6 6 0 016 6v10a6 6 0 01-6 6H1V7zm2.75 5a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Hello;
