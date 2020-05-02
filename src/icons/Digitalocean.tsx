import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Digitalocean = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 6a6 6 0 00-6 6H1C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11v-5a6 6 0 000-12z"
        fill="currentColor"
      />
      <path
        d="M7 18v-5h5v5H7zM3 18v4h4v-4H3zM3 18H1v-2h2v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Digitalocean;
