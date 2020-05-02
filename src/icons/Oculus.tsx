import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Oculus = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 10H8a2 2 0 100 4h8a2 2 0 100-4zM8 6a6 6 0 100 12h8a6 6 0 000-12H8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Oculus;
