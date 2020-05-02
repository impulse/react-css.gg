import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Dice3 = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 12a2 2 0 114 0 2 2 0 01-4 0zM16.945 14.892a2 2 0 100 4 2 2 0 000-4zM5.055 7.055a2 2 0 114 0 2 2 0 01-4 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 013-3h16a3 3 0 013 3v16a3 3 0 01-3 3H4a3 3 0 01-3-3V4zm3-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Dice3;
