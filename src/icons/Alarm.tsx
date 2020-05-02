import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Alarm = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.459 2L1 6.015 2.338 7.5l4.46-4.015L5.457 2zM11 8h2v4h3v2h-5V8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm2 0a7 7 0 1114 0 7 7 0 01-14 0z"
        fill="currentColor"
      />
      <path
        d="M18.541 2L23 6.015 21.662 7.5l-4.46-4.015L18.543 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Alarm;
