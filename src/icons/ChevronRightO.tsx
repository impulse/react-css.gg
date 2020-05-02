import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronRightO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.086 7.757L15.328 12l-4.242 4.243-1.414-1.414L12.5 12 9.672 9.172l1.414-1.415z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm9 11a9 9 0 10-18 0 9 9 0 0018 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ChevronRightO;
