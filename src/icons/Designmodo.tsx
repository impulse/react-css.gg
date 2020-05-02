import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Designmodo = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 4.054a5 5 0 100 10 5 5 0 000-10zm-2 5a2 2 0 104 0 2 2 0 00-4 0z"
        fill="currentColor"
      />
      <path
        d="M22 10.554h-5v-3h5v3zM11.55 16.946a3.988 3.988 0 002.829-1.172l2.121 2.121a6.978 6.978 0 01-4.95 2.05 6.978 6.978 0 01-4.95-2.05l2.122-2.12a3.987 3.987 0 002.828 1.17z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Designmodo;
