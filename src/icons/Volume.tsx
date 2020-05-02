import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Volume = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M24 12a8 8 0 01-8 8v-2a6 6 0 000-12V4a8 8 0 018 8z"
        fill="currentColor"
      />
      <path
        d="M20 12a4 4 0 01-4 4v-2a2 2 0 100-4V8a4 4 0 014 4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16l6 4V4L9 8H5a4 4 0 100 8h4zm-4-6h4l4-2.5v9L9 14H5a2 2 0 110-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Volume;
