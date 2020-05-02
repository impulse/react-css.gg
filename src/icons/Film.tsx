import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Film = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 7a1 1 0 100 2 1 1 0 000-2zM17 8a1 1 0 112 0 1 1 0 01-2 0zM6 11a1 1 0 100 2 1 1 0 000-2zM17 12a1 1 0 112 0 1 1 0 01-2 0zM6 15a1 1 0 100 2 1 1 0 000-2zM17 16a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Film;
