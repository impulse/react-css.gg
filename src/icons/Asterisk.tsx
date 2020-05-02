import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Asterisk = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 6h2v4.079l3.341-2.34 1.147 1.639L13.743 12l3.745 2.622-1.147 1.639L13 13.92V18h-2v-4.079l-3.341 2.34-1.148-1.639L10.257 12 6.51 9.378 7.66 7.739 11 10.08V6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Asterisk;
