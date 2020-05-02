import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Qr = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 3H3v6h2V5h4V3zM3 21v-6h2v4h4v2H3zM15 3v2h4v4h2V3h-6zm4 12h2v6h-6v-2h4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4zm10-6h-4v4h4V7zm-4 6h4v4h-4v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Qr;
