import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ring = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6.343 3.686A8.015 8.015 0 017.936 2.45a8.014 8.014 0 018.128 0 8.016 8.016 0 011.593 1.236L12 9.343 6.343 3.686zM12 6.514L9.413 3.927a6.017 6.017 0 015.174 0L12 6.514z"
        fill="currentColor"
      />
      <path
        d="M2 12.658a9.98 9.98 0 013.692-7.76l1.423 1.424a8 8 0 109.77 0l1.423-1.424A9.98 9.98 0 0122 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ring;
