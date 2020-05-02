import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ToggleOn = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M7 15a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12a7 7 0 00-7-7H7a7 7 0 000 14h10a7 7 0 007-7zm-7-5H7a5 5 0 000 10h10a5 5 0 000-10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ToggleOn;
