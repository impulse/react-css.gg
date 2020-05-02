import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ScrollV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.172 16.818l-1.415 1.414L12 22.475l4.243-4.243-1.415-1.414L12 19.647l-2.828-2.829zM14.828 7.182l1.415-1.414L12 1.525 7.757 5.768l1.415 1.414L12 4.354l2.828 2.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ScrollV;
