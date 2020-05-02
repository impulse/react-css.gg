import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayListSearch = forwardRef(
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
          d="M15.879 4.879h-12v2h12v-2zM15.879 8.879h-12v2h12v-2zM3.879 12.879h8v2h-8v-2z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.757 12.757a3 3 0 003.415 4.83l1.535 1.534 1.414-1.414-1.535-1.535a3.001 3.001 0 00-4.829-3.415zm1.415 2.829a1 1 0 101.414-1.415 1 1 0 00-1.414 1.415z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PlayListSearch;
