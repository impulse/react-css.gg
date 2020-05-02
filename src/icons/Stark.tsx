import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Stark = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.172 18.025a8 8 0 014.935-14.948l-.437 3.126a4.844 4.844 0 00-2.988 9.05l6.146-11.278 2.634 1.436a8 8 0 01-4.934 14.948l.436-3.126a4.844 4.844 0 002.988-9.05L9.806 19.46l-2.634-1.435z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Stark;
