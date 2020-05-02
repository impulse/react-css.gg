import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditMask = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.97-2.57a3 3 0 115.939 0 8.026 8.026 0 004.462-4.46 3 3 0 110-5.938 8.026 8.026 0 00-4.462-4.463 3 3 0 11-5.939 0 8.026 8.026 0 00-4.46 4.462A3.015 3.015 0 015 9a3 3 0 11-.43 5.97 8.026 8.026 0 004.46 4.46z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditMask;
