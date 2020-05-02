import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ZoomIn = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.343 15.243a6 6 0 10-8.485-8.486 6 6 0 008.485 8.486zm1.414-9.9a8.001 8.001 0 01.662 10.565c.016.013.03.027.046.042l4.242 4.242a1 1 0 01-1.414 1.415l-4.243-4.243a.99.99 0 01-.042-.045A8.001 8.001 0 015.444 5.343a8 8 0 0111.313 0zM10.1 7h2v3h3v2h-3v3h-2v-3h-3v-2h3V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ZoomIn;
