import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongUpE = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.032 1.013l4.21 4.275-1.424 1.403-1.804-1.83-.07 12.116 1.998.01-.028 6-6-.029.029-6 2 .01.071-12.145L9.161 6.65 7.758 5.224l4.274-4.21zm-1.108 19.955l2 .01.01-2-2-.01-.01 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongUpE;
