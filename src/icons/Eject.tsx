import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Eject = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.95 14.395l1.414-1.415L12 6.617 5.636 12.98l1.414 1.415L12 9.445l4.95 4.95zM6 17.384h12v-2H6v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Eject;
