import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Readme = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 5.5h5a2 2 0 012 2v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-10a1 1 0 011-1zm10 14c-.35 0-.687-.06-1-.17v.17a1 1 0 11-2 0v-.17c-.313.11-.65.17-1 .17H4a3 3 0 01-3-3v-10a3 3 0 013-3h5a3.99 3.99 0 013 1.354A3.99 3.99 0 0115 3.5h5a3 3 0 013 3v10a3 3 0 01-3 3h-6zm-1-12v9a1 1 0 001 1h6a1 1 0 001-1v-10a1 1 0 00-1-1h-5a2 2 0 00-2 2zm-8 0h4v2H5v-2zm10 0h4v2h-4v-2zm4 3h-4v2h4v-2zm-14 0h4v2H5v-2zm14 3h-4v2h4v-2zm-14 0h4v2H5v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Readme;
