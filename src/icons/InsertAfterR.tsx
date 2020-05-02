import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertAfterR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 4a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm3-1h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
      <path d="M5 20a1 1 0 100 2h14a1 1 0 100-2H5z" fill="currentColor" />
    </svg>
  );
});
export default InsertAfterR;
