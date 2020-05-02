import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tv = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 6.119l1.413-1.413 2.124 2.124L14.367 4l1.411 1.412-2.464 2.464H18a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h3.757L8 6.119zm10 3.757H6v7h12v-7z"
        fill="currentColor"
      />
      <path d="M8 19.876h8v1H8v-1z" fill="currentColor" />
    </svg>
  );
});
export default Tv;
