import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Extension = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 3h8v8h-8V3zm2 2h4v4h-4V5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 21v-8h-6V7H3v14h14zM9 9H5v4h4V9zM5 19v-4h4v4H5zm6 0v-4h4v4h-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Extension;
