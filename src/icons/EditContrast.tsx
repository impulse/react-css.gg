import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditContrast = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 18a5.978 5.978 0 01-4-1.528A5.985 5.985 0 016 12c0-1.777.772-3.374 2-4.472A5.978 5.978 0 0112 6v12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10 8a8 8 0 110-16 8 8 0 010 16z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditContrast;
