import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Toolbox = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 5.5h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2v-12a2 2 0 012-2h3a3 3 0 013-3h4a3 3 0 013 3zm-3-1h-4a1 1 0 00-1 1h6a1 1 0 00-1-1zm6 3H4v2h16v-2zm-16 12v-8h3v2h4v-2h2v2h4v-2h3v8H4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Toolbox;
