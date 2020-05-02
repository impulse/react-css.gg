import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Disc = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 102 0 1 1 0 00-2 0z"
        fill="currentColor"
      />
      <path
        d="M5 12a7 7 0 017-7v2a5 5 0 00-5 5H5zM12 17a5 5 0 005-5h2a7 7 0 01-7 7v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12a9 9 0 1018 0 9 9 0 00-18 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Disc;
