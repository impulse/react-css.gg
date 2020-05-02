import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatStrike = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 7h4V5H7v2h4v3h2V7zM11 19v-5h2v5h-2zM5 13h14v-2H5v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FormatStrike;
