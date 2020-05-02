import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FlagAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.439 7l2.4-3H7v6h7.839l-2.4-3zM19 12H7v10H5V2h14l-4 5 4 5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FlagAlt;
