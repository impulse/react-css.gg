import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Unsplash = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 4.5H9v4h6v-4zM4 10.5h5v4h6v-4h5v9H4v-9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Unsplash;
