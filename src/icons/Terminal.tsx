import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Terminal = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.033 14.828l1.415 1.415L10.69 12 6.448 7.757 5.033 9.172 7.862 12l-2.829 2.828zM15 14h-4v2h4v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2a2 2 0 00-2 2v16a2 2 0 002 2h20a2 2 0 002-2V4a2 2 0 00-2-2H2zm20 2H2v16h20V4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Terminal;
