import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowRightO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243-1.414 1.415L13.88 11H6.343v2h7.537l-1.828 1.829z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0zm-1.414-1.414A9 9 0 105.636 5.636a9 9 0 0012.728 12.728z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowRightO;
