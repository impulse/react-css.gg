import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const HomeScreen = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 5a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 100-2 1 1 0 000 2zM10 19a1 1 0 11-2 0 1 1 0 012 0zM9 12a1 1 0 100-2 1 1 0 000 2zM13 5a1 1 0 11-2 0 1 1 0 012 0zM12 9a1 1 0 100-2 1 1 0 000 2zM13 19a1 1 0 11-2 0 1 1 0 012 0zM15 6a1 1 0 100-2 1 1 0 000 2zM16 8a1 1 0 11-2 0 1 1 0 012 0zM15 20a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a3 3 0 00-3 3v16a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3H8zm8 2H8a1 1 0 00-1 1v16a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default HomeScreen;
