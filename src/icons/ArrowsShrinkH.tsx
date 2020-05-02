import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsShrinkH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M1 7h2v10H1V7zM8.448 7.757l1.414 1.415L8.033 11h7.933l-1.828-1.828 1.414-1.415L19.795 12l-4.243 4.243-1.414-1.415L15.966 13H8.034l1.828 1.828-1.414 1.415L4.205 12l4.243-4.243zM23 7h-2v10h2V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsShrinkH;
