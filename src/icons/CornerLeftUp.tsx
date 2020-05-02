import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerLeftUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.71 10.625l1.413-1.415-6.37-6.358-6.358 6.37 1.416 1.413 3.78-3.789.01 10.306a4 4 0 004.004 3.996l8-.007-.002-2-8 .007a2 2 0 01-2.002-1.998l-.01-10.636 4.119 4.111z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CornerLeftUp;
