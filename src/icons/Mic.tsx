import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Mic = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 4a3 3 0 116 0v8a3 3 0 11-6 0V4zm4 0v8a1 1 0 11-2 0V4a1 1 0 112 0z"
        fill="currentColor"
      />
      <path
        d="M18 12a6.002 6.002 0 01-5 5.917V21h4v2H7v-2h4v-3.083A6.002 6.002 0 016 12V9h2v3a4 4 0 008 0V9h2v3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Mic;
