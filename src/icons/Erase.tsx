import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Erase = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3.5 12.9a2 2 0 000 2.828l3.858 3.858H4.086a1 1 0 100 2h16a1 1 0 000-2h-9.13l9.515-9.515a2 2 0 000-2.828L16.227 3a2 2 0 00-2.829 0L3.5 12.9zm4.326-1.498l-2.912 2.912 4.243 4.242 2.911-2.911-4.242-4.243zM9.24 9.988l4.243 4.242 5.573-5.573-4.242-4.243L9.24 9.988z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Erase;
