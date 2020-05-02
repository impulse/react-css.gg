import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Photoscan = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M9 8a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h10zm-4.535 2H17v11H7v-5.535A4 4 0 0012.465 5zM9 5a2 2 0 100 4 2 2 0 000-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Photoscan;
