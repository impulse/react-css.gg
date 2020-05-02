import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.032 1.017l-4.274 4.21L9.16 6.653l1.859-1.83-.056 18.155 2 .006.056-18.113 1.798 1.825 1.425-1.403-4.21-4.275z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongUp;
