import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const List = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20 4H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zM4 2a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V5a3 3 0 00-3-3H4zm2 5h2v2H6V7zm5 0a1 1 0 100 2h6a1 1 0 100-2h-6zm-3 4H6v2h2v-2zm2 1a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zm-2 3H6v2h2v-2zm2 1a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default List;
