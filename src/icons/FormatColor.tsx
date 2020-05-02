import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatColor = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.948 3.21A1 1 0 0012 2.632a1 1 0 00-.948.576L5.135 15.898a1 1 0 101.813.845l1.45-3.111h7.203l1.451 3.111a1 1 0 001.813-.845L12.948 3.209zm1.72 8.422L12 5.909l-2.669 5.723h5.338z"
        fill="currentColor"
      />
      <path d="M6 19.368a1 1 0 000 2h12a1 1 0 100-2H6z" fill="currentColor" />
    </svg>
  );
});
export default FormatColor;
