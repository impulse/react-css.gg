import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayList = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 5H4v2h12V5zM16 9H4v2h12V9zM4 13h8v2H4v-2zM20 16l-6-3v6l6-3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PlayList;
