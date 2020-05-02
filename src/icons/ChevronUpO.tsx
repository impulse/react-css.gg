import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronUpO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.829 14.828l1.414-1.414L12 9.172l-4.243 4.242 1.415 1.415L12 12l2.829 2.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12zm11-9a9 9 0 100 18 9 9 0 000-18z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ChevronUpO;
