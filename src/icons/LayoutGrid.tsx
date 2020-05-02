import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LayoutGrid = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 7H7v4h4V7zM11 13H7v4h4v-4zM13 13h4v4h-4v-4zM17 7h-4v4h4V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LayoutGrid;
