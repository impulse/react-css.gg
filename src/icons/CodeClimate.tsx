import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CodeClimate = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.495 8.11l-6.364 6.365 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414L9.495 8.11zM14.505 8.11l-1.973 1.974 1.418 1.41.555-.555 4.95 4.95 1.414-1.414-6.364-6.364z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CodeClimate;
