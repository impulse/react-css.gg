import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bee = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.951 15.571a5.993 5.993 0 01-2.27 4.064 4.016 4.016 0 01-1.756 1.96 2 2 0 01-3.874 0 4.016 4.016 0 01-1.756-1.96 5.993 5.993 0 01-2.269-4.047 3.001 3.001 0 01-4.11-4.32L6.01 6.39a6 6 0 0111.953-.033l4.12 4.91a3 3 0 01-4.132 4.304zm-2.326-2.665l-1.678-2h-3.894l-1.678 2h7.25zm2.363-.296l1.032 1.229a1 1 0 101.532-1.286l-2.564-3.055v3.112zm-2-3.704v-2a4 4 0 00-8 0v2h8zM4.98 13.839l1.007-1.2V9.527l-2.54 3.027a1 1 0 101.533 1.285zm7.007 5.067a4 4 0 01-4-4h8a4 4 0 01-4 4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bee;
