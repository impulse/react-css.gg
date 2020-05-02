import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Spinner = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Spinner;
