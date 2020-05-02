import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Track = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a1 1 0 011 1v1.07A7.004 7.004 0 0118.93 11H20a1 1 0 110 2h-1.07A7.004 7.004 0 0113 18.93V20a1 1 0 11-2 0v-1.07A7.004 7.004 0 015.07 13H4a1 1 0 110-2h1.07A7.005 7.005 0 0111 5.07V4a1 1 0 011-1zm-5 9a5 5 0 1110 0 5 5 0 01-10 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Track;
