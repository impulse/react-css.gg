import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bulb = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 9a7.997 7.997 0 004 6.93V16a4 4 0 108 0v-.07A8 8 0 104 9zm12 4.472a6 6 0 10-8 0h2V16a2 2 0 104 0V13.47l2 .001z"
        fill="currentColor"
      />
      <path
        d="M10 21.006V21c.588.34 1.271.535 2 .535.729 0 1.412-.195 2-.535v.006a2 2 0 11-4 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bulb;
