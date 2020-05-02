import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayTrackPrev = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M18 17l-8-5 8-5v10zM6 7h3v10H6V7z" fill="currentColor" />
    </svg>
  );
});
export default PlayTrackPrev;
