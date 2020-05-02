import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsMergeAltH = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M1.503 6h2v5h4.172L5.846 9.172l1.415-1.415L11.503 12l-4.242 4.243-1.415-1.415L7.675 13H3.503v5h-2V6zM20.497 6h2v12h-2v-5h-4.172l1.829 1.829-1.415 1.414L12.497 12l4.242-4.243 1.415 1.415L16.325 11h4.172V6z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsMergeAltH;
