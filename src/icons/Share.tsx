import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Share = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18 9a3 3 0 10-2.977-2.63l-6.94 3.47a3 3 0 100 4.319l6.94 3.47a3 3 0 10.895-1.789l-6.94-3.47a3.03 3.03 0 000-.74l6.94-3.47C16.456 8.68 17.19 9 18 9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Share;
