import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Read = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 14a2 2 0 100-4 2 2 0 000 4zm3.465-4a4.002 4.002 0 00-7.339 1H2a1 1 0 100 2h1.126A4.002 4.002 0 0011 12h2a4 4 0 007.874 1H22a1 1 0 100-2h-1.126a4.002 4.002 0 00-7.339-1h-3.07zM15 12a2 2 0 104 0 2 2 0 00-4 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Read;
