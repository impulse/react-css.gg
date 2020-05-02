import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FolderAdd = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M11 14.5v2h2v-2h2v-2h-2v-2h-2v2H9v2h2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1.5a2 2 0 00-2 2v1c0 .057.002.113.007.168A3.001 3.001 0 000 7.5v12a3 3 0 003 3h18a3 3 0 003-3v-12a3 3 0 00-3-3h-9.126A4.002 4.002 0 008 1.5H4zm5.732 3A2 2 0 008 3.5H4v1h5.732zM3 6.5a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1v-12a1 1 0 00-1-1H3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FolderAdd;
