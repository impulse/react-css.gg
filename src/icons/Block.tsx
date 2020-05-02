import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Block = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8.465 14.121a1 1 0 101.414 1.415l5.657-5.657a1 1 0 10-1.415-1.415l-5.656 5.657z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.343 17.657A8 8 0 1017.657 6.343 8 8 0 006.343 17.657zm9.9-1.414a6 6 0 11-8.486-8.485 6 6 0 018.486 8.485z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Block;
