import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Quote = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.135 9h3L10 14.607H7L9.135 9zM14.135 9h3L15 14.607h-3L14.135 9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Quote;
