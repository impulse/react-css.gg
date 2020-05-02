import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartHomeHeat = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 11H7a1 1 0 100 2h3v2H7a3 3 0 110-6h10a3 3 0 110 6h-3v-2h3a1 1 0 100-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12a7 7 0 017-7h10a7 7 0 110 14H7a7 7 0 01-7-7zm7-5h10a5 5 0 010 10H7A5 5 0 017 7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SmartHomeHeat;
