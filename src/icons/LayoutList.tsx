import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LayoutList = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 7H7v2h2V7zM7 13v-2h2v2H7zM7 15v2h2v-2H7zM11 15v2h6v-2h-6zM17 13v-2h-6v2h6zM17 7v2h-6V7h6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LayoutList;
