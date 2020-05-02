import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const External = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914-1.414-1.414 4.95-4.95z"
        fill="currentColor"
      />
      <path
        d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default External;
