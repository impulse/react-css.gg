import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Flag = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 21h2V11h6v2h8V5h-7V3H4v18zm8-16H6v4h7v2h5V7h-6V5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Flag;
