import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Minimize = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 9H3V7h4V3h2v6zM9 15H3v2h4v4h2v-6zM21 15h-6v6h2v-4h4v-2zM15 9h6V7h-4V3h-2v6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Minimize;
