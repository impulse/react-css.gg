import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const TrendingDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M1.851 8.106L.437 9.52l7.07 7.072 6.365-6.364 4.242 4.242-1.742 1.743 6.692 1.793-1.793-6.692-1.742 1.742-5.657-5.657-6.364 6.364L1.85 8.106z"
        fill="currentColor"
      />
    </svg>
  );
});
export default TrendingDown;
