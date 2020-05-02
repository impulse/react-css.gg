import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Duplicate = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 5H7V3h14v14h-2V5zM9 13v-2h2v2h2v2h-2v2H9v-2H7v-2h2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7h14v14H3V7zm2 2h10v10H5V9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Duplicate;
