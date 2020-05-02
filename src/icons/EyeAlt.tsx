import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EyeAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C6.408 3 1.71 6.824.378 12 1.71 17.176 6.408 21 12 21c5.591 0 10.29-3.824 11.622-9C22.29 6.824 17.592 3 12 3zm4 9a4 4 0 11-8 0 4 4 0 018 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EyeAlt;
