import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const TapSingle = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.05 3.114c2.143 0 4.09.843 5.526 2.216L16.16 6.744a5.98 5.98 0 00-4.112-1.63 5.98 5.98 0 00-4.21 1.725L6.424 5.425a7.974 7.974 0 015.625-2.311zM10.977 11.886a1 1 0 112 0v2h-2v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.977 6.886a5 5 0 00-5 5v4a5 5 0 0010 0v-4a5 5 0 00-5-5zm3 9v-4a3 3 0 00-6 0v4a3 3 0 006 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default TapSingle;
