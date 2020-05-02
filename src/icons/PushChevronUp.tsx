import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 16.929l1.414 1.414 5.657-5.657 5.657 5.657 1.414-1.414-7.07-7.071L5 16.929zM19 8H5V6h14v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PushChevronUp;
