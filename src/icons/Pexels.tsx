import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pexels = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 5a5.001 5.001 0 010 10v4H6V5h6zM8 7v10h2v-4h2l.003-.001a2.993 2.993 0 003.041-3.044l-.007-.39a2.61 2.61 0 00-2.711-2.562l-.306.005L12 7H8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Pexels;
