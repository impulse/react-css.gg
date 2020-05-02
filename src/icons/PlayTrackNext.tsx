import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayTrackNext = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M6 17l8-5-8-5v10zM18 7h-3v10h3V7z" fill="currentColor" />
    </svg>
  );
});
export default PlayTrackNext;
