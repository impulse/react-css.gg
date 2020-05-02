import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Import = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 9.982v10h14v-10h-4v-2h6v14H3v-14h6v2H5z"
        fill="currentColor"
      />
      <path
        d="M13 2h-2v12.053l-2.535-2.536-1.415 1.415 4.95 4.95 4.95-4.95-1.414-1.415L13 14.053V2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Import;
