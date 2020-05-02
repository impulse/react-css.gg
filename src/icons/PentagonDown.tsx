import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 8L7 6v10l5 2.5 5-2.5V6l-5 2zm3 .954l-3 1.2-3-1.2v5.81l3 1.5 3-1.5v-5.81z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PentagonDown;
