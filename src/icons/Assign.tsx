import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Assign = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 6h4V4H4v6h2V6zM10 18H6v-4H4v6h6v-2zM14 6h4v4h2V4h-6v2zM14 18h4v-4h2v6h-6v-2zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Assign;
