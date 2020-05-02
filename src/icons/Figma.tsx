import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Figma = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8.5 2a3 3 0 000 6h7a3 3 0 100-6h-7zM15.5 9a3 3 0 100 6 3 3 0 000-6zM5.5 12a3 3 0 013-3h3v6h-3a3 3 0 01-3-3zM8.5 16a3 3 0 103 3v-3h-3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Figma;
