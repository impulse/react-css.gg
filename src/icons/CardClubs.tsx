import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CardClubs = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 11a2 2 0 100-4 2 2 0 000 4zM11 13a2 2 0 11-4 0 2 2 0 014 0zM15 15a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4a3 3 0 013-3h12a3 3 0 013 3v16a3 3 0 01-3 3H6a3 3 0 01-3-3V4zm3-1h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CardClubs;
