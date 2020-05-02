import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CodeSlash = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.458-1.369-6.16 6.563 6.563 6.159zM16.388 18.36l-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.458-1.369 6.16 6.563-6.563 6.159z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CodeSlash;
