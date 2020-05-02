import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Circleci = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM4.144 13.517a8 8 0 10-.006-3l2.59-.01a5.478 5.478 0 11.004 3l-2.588.01zM9.522 12a2.478 2.478 0 104.956 0 2.478 2.478 0 00-4.956 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Circleci;
