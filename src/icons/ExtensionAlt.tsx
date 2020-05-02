import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ExtensionAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 5v14h8v-6h6V5H5zm6 2H7v4h4V7zm0 6H7v4h4v-4zm2-2h4V7h-4v4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ExtensionAlt;
