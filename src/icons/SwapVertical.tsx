import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SwapVertical = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 16h1.5v-6h2v6H17l-2.5 3-2.5-3zM8 8h1.5v6h2V8H13l-2.5-3L8 8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SwapVertical;
