import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerLeftDown = forwardRef(
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
          d="M10.601 6.85a2 2 0 012.002-1.998l8 .007.002-2-8-.007a4 4 0 00-4.004 3.996l-.01 10.306-3.78-3.788-1.416 1.412 6.358 6.37 6.37-6.358-1.413-1.415-4.119 4.11.01-10.635z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerLeftDown;
