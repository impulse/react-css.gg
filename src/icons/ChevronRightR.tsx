import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronRightR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.485 12.045l-4.242-4.243-1.415 1.415 2.829 2.828-2.829 2.829 1.415 1.414 4.242-4.243z"
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
export default ChevronRightR;
