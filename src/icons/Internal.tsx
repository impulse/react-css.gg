import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Internal = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20.708 4.412l-10.25 10.287h3.59v2h-7v-7h2v3.58L19.293 3l1.416 1.412z"
        fill="currentColor"
      />
      <path d="M11 4.706v2H5v12h12v-6h2v8H3v-16h8z" fill="currentColor" />
    </svg>
  );
});
export default Internal;
