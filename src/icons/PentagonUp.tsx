import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 16l5 2V8l-5-2-5 2v10l5-2zm-3-.954l3-1.2 3 1.2V9.354l-3-1.2-3 1.2v5.692z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PentagonUp;
