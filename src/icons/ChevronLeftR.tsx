import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronLeftR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 7.757l1.414 1.415L11.586 12l2.828 2.828L13 16.243 8.757 12 13 7.757z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 1a4 4 0 014 4v14a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4h14zm2 4v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ChevronLeftR;
