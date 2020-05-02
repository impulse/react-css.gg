import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertAfterO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 8a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V6a1 1 0 10-2 0v2H9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 9a8 8 0 1116 0A8 8 0 014 9zm8 6a6 6 0 110-12 6 6 0 010 12z"
        fill="currentColor"
      />
      <path d="M5 20a1 1 0 100 2h14a1 1 0 100-2H5z" fill="currentColor" />
    </svg>
  );
});
export default InsertAfterO;
