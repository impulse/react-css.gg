import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayBackwards = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 7h3v10H2V7zM6 12l7.002-5v10L6 12zM21.002 7L14 12l7.002 5V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PlayBackwards;
