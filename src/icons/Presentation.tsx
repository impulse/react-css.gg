import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Presentation = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm8-10h-2a6 6 0 00-12 0H4a8 8 0 1116 0zM4.252 14h15.496a8.003 8.003 0 01-15.496 0zM8 12a4 4 0 118 0H8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Presentation;
