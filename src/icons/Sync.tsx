import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Sync = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4.56 10.642L6.355 3.95l1.9 1.9c3.477-2.191 8.127-1.772 11.156 1.256l-1.414 1.415a7.003 7.003 0 00-8.28-1.21l1.537 1.538-6.692 1.793zM19.44 13.358l-1.794 6.692-1.9-1.9A9.003 9.003 0 014.59 16.894l1.414-1.415a7.003 7.003 0 008.28 1.21l-1.537-1.538 6.692-1.793z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Sync;
