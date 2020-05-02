import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Globe = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6.853 8a5 5 0 1110 0 5 5 0 01-10 0zm5 3a3 3 0 110-6 3 3 0 010 6z"
        fill="currentColor"
      />
      <path
        d="M5 12.13a8.001 8.001 0 005.941 3.819V18H8.853v2h6v-2h-1.912v-2.073A8.002 8.002 0 0018.63 3.745l-1.704 1.048a6 6 0 11-10.221 6.288L5 12.13z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Globe;
