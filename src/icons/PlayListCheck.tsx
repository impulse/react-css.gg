import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayListCheck = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 6H3v2h12V6zM15 10H3v2h12v-2zM3 14h8v2H3v-2zM11.99 15.025l1.415-1.414 2.121 2.121 4.243-4.242 1.414 1.414-5.657 5.657-3.535-3.536z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PlayListCheck;
