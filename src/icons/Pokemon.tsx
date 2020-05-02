import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pokemon = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm2.07 1a7.002 7.002 0 0013.86 0h-4.1a3.001 3.001 0 01-5.66 0h-4.1zm13.86-2a7.001 7.001 0 00-13.86 0h4.1a3.001 3.001 0 015.66 0h4.1zM12 13a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Pokemon;
