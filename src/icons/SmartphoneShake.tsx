import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartphoneShake = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        ref={ref}
        {...props}
      >
        <path d="M13 14h-2v2h2v-2z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 7a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V7zm2 0h4v10h-4V7z"
          fill="currentColor"
        />
        <path
          d="M18 9h2v6h-2V9zM0 14h2v-4H0v4zM6 15H4V9h2v6zM24 10h-2v4h2v-4z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmartphoneShake;
