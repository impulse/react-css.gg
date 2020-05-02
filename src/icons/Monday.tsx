import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Monday = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6.779 6.14a3 3 0 014.915 3.44l-5.736 8.192a3 3 0 01-4.915-3.441l5.736-8.192zM15.268 6.228a3 3 0 014.915 3.442l-5.736 8.191a3 3 0 01-4.915-3.441l5.736-8.192zM20.5 18.86a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Monday;
