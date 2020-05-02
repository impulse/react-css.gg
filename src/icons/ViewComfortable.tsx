import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ViewComfortable = forwardRef(
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8zm3-1h14a1 1 0 011 1v3H4V8a1 1 0 011-1zm-1 6v3a1 1 0 001 1h3v-4H4zm6 4h9a1 1 0 001-1v-3H10v4z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ViewComfortable;
