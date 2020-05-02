import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Piano = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 21a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h19zM11 5H8.985v8h-1v6H12v-6h-1V5zm7.015 14H22V5h-2.985v8h-1v6zm-1-6h-1V5H14v8h-1v6h4.015v-6zm-10.03 6v-6h-1V5H3v14h3.985z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Piano;
