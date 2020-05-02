import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Options = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 3a4.002 4.002 0 013.874 3H19v2h-8.126A4.002 4.002 0 013 7a4 4 0 014-4zm0 6a2 2 0 100-4 2 2 0 000 4zM17 20a4.002 4.002 0 01-3.874-3H5v-2h8.126A4.002 4.002 0 0121 16a4 4 0 01-4 4zm0-2a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Options;
