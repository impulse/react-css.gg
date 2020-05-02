import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const IndieHackers = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 6h3v12H4V6zM10 6h3v4.5h4V6h3v12h-3v-4.5h-4V18h-3V6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default IndieHackers;
