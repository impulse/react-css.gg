import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Sweden = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M23 4H10v7h13V4zM23 13v7H10v-7h13zM8 13v7H1v-7h7zM1 11V4h7v7H1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Sweden;
