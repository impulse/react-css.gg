import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Keyboard = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 9a1 1 0 100-2 1 1 0 000 2zM9 15a1 1 0 100 2h6a1 1 0 100-2H9zM9 12a1 1 0 11-2 0 1 1 0 012 0zM12 9a1 1 0 100-2 1 1 0 000 2zM13 12a1 1 0 11-2 0 1 1 0 012 0zM16 9a1 1 0 100-2 1 1 0 000 2zM17 12a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Keyboard;
