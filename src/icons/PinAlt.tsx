import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PinAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M12 11a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9a6.002 6.002 0 01-5 5.917V20a1 1 0 11-2 0v-5.083A6.002 6.002 0 0112 3a6 6 0 016 6zm-6 4a4 4 0 100-8 4 4 0 000 8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PinAlt;
