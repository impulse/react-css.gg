import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignTop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.035 7.988l.002 6 4-.002-.002-6-4 .002z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4.012L6 4.018v2l12-.006v-2zM11.037 19.986l-.005-12-4 .002.005 12 4-.002z"
        fill="currentColor"
      />
    </svg>
  );
});
export default AlignTop;
