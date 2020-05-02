import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditUnmask = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 5a3 3 0 11-6 0 3 3 0 016 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM12 22a3 3 0 100-6 3 3 0 000 6zM22 12a3 3 0 11-6 0 3 3 0 016 0zM5 15a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditUnmask;
