import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Select = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 9.657l1.414 1.414 4.243-4.243 4.242 4.243 1.415-1.414L11.657 4 6 9.657zM6 14.443l1.414-1.414 4.243 4.243 4.242-4.243 1.415 1.414-5.657 5.657L6 14.443z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Select;
