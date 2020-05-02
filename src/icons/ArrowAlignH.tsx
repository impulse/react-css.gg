import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowAlignH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 7h-2v10h2V7zM6 7.757l1.414 1.415L5.586 11H10v2H5.586l1.828 1.828L6 16.243 1.757 12 6 7.757zM18 16.243l-1.414-1.414L18.414 13H14v-2h4.414l-1.828-1.828L18 7.757 22.243 12 18 16.243z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowAlignH;
