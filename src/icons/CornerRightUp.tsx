import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerRightUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.29 10.625L7.877 9.21l6.37-6.358 6.358 6.37-1.416 1.413-3.78-3.789-.01 10.306a4 4 0 01-4.004 3.996l-8-.007.002-2 8 .007a2 2 0 002.002-1.998l.01-10.636-4.119 4.111z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CornerRightUp;
