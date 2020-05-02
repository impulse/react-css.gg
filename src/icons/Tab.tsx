import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tab = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm1 5.625h-7c-.552 0-1.156-.42-1.348-.938L10.654 6H5a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V9.625z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tab;
