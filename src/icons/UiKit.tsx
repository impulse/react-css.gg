import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const UiKit = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14 6h-4a1 1 0 00-1 1v10a1 1 0 001 1h4a1 1 0 001-1V7a1 1 0 00-1-1zm-4-2a3 3 0 00-3 3v10a3 3 0 003 3h4a3 3 0 003-3V7a3 3 0 00-3-3h-4z"
        fill="currentColor"
      />
      <path
        d="M6 7.46l-2.507-.418A3 3 0 000 10v4.917a3 3 0 003.493 2.96L6 17.458v-2.027l-2.836.472A1 1 0 012 14.918v-4.917a1 1 0 011.164-.987L6 9.487V7.459zM18 7.46l2.507-.418A3 3 0 0124 10v4.917a3 3 0 01-3.493 2.96L18 17.458v-2.027l2.836.472A1 1 0 0022 14.918v-4.917a1 1 0 00-1.164-.987L18 9.487V7.459z"
        fill="currentColor"
      />
    </svg>
  );
});
export default UiKit;
