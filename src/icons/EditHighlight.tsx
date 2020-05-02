import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditHighlight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 6a5.972 5.972 0 00-3.306.992H12v1H7.535a5.996 5.996 0 00-1.203 2.034H12v1H6.079a6.042 6.042 0 00.003 1.966H12v1H6.339c.263.748.67 1.429 1.189 2.008H12v1H8.682A6 6 0 1012 6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10 8a8 8 0 110-16 8 8 0 010 16z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditHighlight;
