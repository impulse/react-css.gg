import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bot = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M14.125 13h-4v2h4v-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.125 13a2 2 0 100-4 2 2 0 000 4zm0-1.5a.5.5 0 100-1 .5.5 0 000 1zM18.125 11a2 2 0 11-4 0 2 2 0 014 0zm-1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.749 14.666A6 6 0 008.125 18h8c2.44 0 4.54-1.456 5.478-3.547A2.997 2.997 0 0022.875 12c0-1.013-.503-1.91-1.272-2.452A6.001 6.001 0 0016.125 6h-8A6 6 0 002.75 9.334a3 3 0 000 5.332zM8.125 8h8c1.384 0 2.603.702 3.322 1.77.276.69.428 1.442.428 2.23s-.152 1.54-.428 2.23A3.996 3.996 0 0116.125 16h-8a4 4 0 010-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bot;
