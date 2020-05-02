import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Enter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M20 5H8v4H6V3h16v18H6v-6h2v4h12V5z" fill="currentColor" />
      <path
        d="M13.074 16.95l-1.414-1.414L14.196 13H2v-2h12.196L11.66 8.465l1.414-1.415 4.95 4.95-4.95 4.95z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Enter;
