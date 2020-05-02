import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Anchor = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 6a3.001 3.001 0 01-2 2.83v8.044c1.725-.444 3-2.01 3-3.874h2a6.002 6.002 0 01-5 5.917V20a1 1 0 11-2 0v-1.083A6.002 6.002 0 016 13h2a4.002 4.002 0 003 3.874V8.829A3.001 3.001 0 1115 6zm-3 1a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Anchor;
