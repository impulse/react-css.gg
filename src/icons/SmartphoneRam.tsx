import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartphoneRam = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 4a1 1 0 11-2 0 1 1 0 012 0zM9 4a1 1 0 11-2 0 1 1 0 012 0zM12 5a1 1 0 100-2 1 1 0 000 2zM17 4a1 1 0 11-2 0 1 1 0 012 0zM20 5a1 1 0 100-2 1 1 0 000 2zM5 20a1 1 0 11-2 0 1 1 0 012 0zM9 20a1 1 0 11-2 0 1 1 0 012 0zM12 21a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 11-2 0 1 1 0 012 0zM20 21a1 1 0 100-2 1 1 0 000 2zM5 12a1 1 0 100-2 1 1 0 000 2zM20 13a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9a3 3 0 013-3h18a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3V9zm3-1h18a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SmartphoneRam;
