import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ratio = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M4 6v6h2V8h4V6H4zM20 18h-6v-2h4v-4h2v6z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2a4 4 0 00-4 4v12a4 4 0 004 4h16a4 4 0 004-4V6a4 4 0 00-4-4H4zm16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ratio;
