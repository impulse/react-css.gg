import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Dolby = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M0 4v16h24V4H0zm10 8a4 4 0 00-4-4H4v8h2a4 4 0 004-4zm8 4h2V8h-2a4 4 0 000 8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Dolby;
