import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Headset = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 21a2 2 0 01-2-2v-4a2 2 0 012-2h2v-1a7 7 0 10-14 0v1h2a2 2 0 012 2v4a2 2 0 01-2 2H3v-9a9 9 0 0118 0v9h-4zm2-6h-2v4h2v-4zM7 15H5v4h2v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Headset;
