import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Cloud = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.738 19.996A8 8 0 108.735 7H7.52a6.5 6.5 0 000 13h7c.074 0 .146-.001.219-.004zm1.953-2.275c2.35-.769 4.29-3.04 4.29-5.721a6 6 0 00-12 0h-2c0-1.06.206-2.074.581-3H7.52a4.5 4.5 0 100 9h7c.55 0 1.385-.099 2.172-.279z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Cloud;
