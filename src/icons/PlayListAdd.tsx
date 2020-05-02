import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayListAdd = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 5h12v2H2V5zM2 9h12v2H2V9zM10 13H2v2h8v-2z"
        fill="currentColor"
      />
      <path d="M16 9h2v4h4v2h-4v4h-2v-4h-4v-2h4V9z" fill="currentColor" />
    </svg>
  );
});
export default PlayListAdd;
