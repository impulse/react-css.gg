import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Microbit = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 14a2 2 0 100-4 2 2 0 000 4zM19 12a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5a7 7 0 000 14h10a7 7 0 100-14H7zm10 3H7a4 4 0 100 8h10a4 4 0 000-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Microbit;
