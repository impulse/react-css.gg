import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Link = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.828 12l1.415 1.414 2.828-2.828a4 4 0 00-5.657-5.657l-2.828 2.828L12 9.172l2.828-2.829a2 2 0 112.829 2.829L14.828 12zM12 14.829l1.414 1.414-2.828 2.828a4 4 0 01-5.657-5.657l2.828-2.828L9.172 12l-2.829 2.829a2 2 0 102.829 2.828L12 14.828z"
        fill="currentColor"
      />
      <path
        d="M14.829 10.586a1 1 0 00-1.415-1.415l-4.242 4.243a1 1 0 101.414 1.414l4.242-4.242z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Link;
