import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongUpL = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.032 1.019l4.21 4.274-1.424 1.404-1.799-1.826-.051 16.11h1.996v2h-6v-2h2.004l.051-16.157-1.858 1.83-1.403-1.425 4.274-4.21z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongUpL;
