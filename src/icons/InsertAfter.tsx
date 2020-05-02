import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertAfter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 4a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 010-2h3V5a1 1 0 011-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default InsertAfter;
