import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsShrinkV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 1v2H7V1h10zM16.243 8.448l-1.414 1.414L13 8.033v7.934l1.829-1.829 1.414 1.414L12 19.795l-4.243-4.243 1.415-1.414L11 15.966V8.034L9.172 9.862 7.757 8.448 12 4.205l4.243 4.243zM17 23v-2H7v2h10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsShrinkV;
