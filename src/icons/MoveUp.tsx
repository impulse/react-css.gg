import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MoveUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M17 19.071h-2v-8h2v8zM9 19.071H7v-8h2v8z" fill="currentColor" />
      <path
        d="M13 19.071h-2v-10H7.965l4-4.071 4 4.071H13v10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MoveUp;
