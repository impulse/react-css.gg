import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CalendarNext = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.725 16.546l4.5-2.598-4.5-2.598v1.598h-3.95v2h3.95v1.598zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CalendarNext;
