import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ClapperBoard = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20.17 3l-.004.005A3 3 0 0123 6v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16.17zm-9.694 2h6L13.09 9h-6l3.387-4zM5.09 9l3.387-4H4a1 1 0 00-1 1v3h2.089zM3 11v7a1 1 0 001 1h16a1 1 0 001-1v-7H3zm18-2V6a1 1 0 00-1-1h-1.524L15.09 9H21z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ClapperBoard;
