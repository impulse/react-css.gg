import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MoveTask = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18.964 7h-8v2h8V7zM6 8.829v6.342L9.964 12 6 8.829zM18.964 11h-8v2h8v-2zM10.964 15h8v2h-8v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MoveTask;
