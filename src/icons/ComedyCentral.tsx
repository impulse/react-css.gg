import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ComedyCentral = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10.544 19a7 7 0 10-4.95-11.95L3.475 4.93l-.019.018A9.969 9.969 0 0110.545 2c5.522 0 10 4.477 10 10s-4.478 10-10 10a9.969 9.969 0 01-7.072-2.929l2.122-2.121a6.978 6.978 0 004.95 2.05z"
        fill="currentColor"
      />
      <path
        d="M10.544 14c.594 0 1.126-.258 1.493-.668l2.122 2.122a5 5 0 110-6.909l-2.122 2.123A2 2 0 1010.545 14z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ComedyCentral;
