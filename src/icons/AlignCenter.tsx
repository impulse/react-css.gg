import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignCenter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M9 13h6v4H9v-4z" fill="currentColor" fillOpacity={0.5} />
      <path d="M6 7h12v4H6V7z" fill="currentColor" />
    </svg>
  );
});
export default AlignCenter;
