import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SpaceBetween = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 5h-4v14h4v-2h-2V7h2V5zM5 5h4v14H5v-2h2V7H5V5zM13 7v10h-2V7h2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SpaceBetween;
