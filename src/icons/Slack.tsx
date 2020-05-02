import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Slack = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 10a2 2 0 104 0V5a2 2 0 10-4 0v5zM5 8a2 2 0 100 4h5a2 2 0 100-4H5zm10 5a2 2 0 100 4h5a2 2 0 100-4h-5zm-5 9a2 2 0 01-2-2v-5a2 2 0 114 0v5a2 2 0 01-2 2zM8 5a2 2 0 114 0v2h-2a2 2 0 01-2-2zM3 15a2 2 0 104 0v-2H5a2 2 0 00-2 2zm14 5a2 2 0 11-4 0v-2h2a2 2 0 012 2zm5-10a2 2 0 10-4 0v2h2a2 2 0 002-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Slack;
