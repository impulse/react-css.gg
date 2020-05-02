import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bowl = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20.547 3.672a1 1 0 00-1.414 0l-5.364 5.364H2v2h.008c.218 5.33 4.608 9.585 9.992 9.585 5.384 0 9.774-4.255 9.992-9.585H22v-2h-5.403l3.95-3.95a1 1 0 000-1.414zm-6.37 7.364h5.813a8 8 0 01-15.98 0h10.166z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bowl;
