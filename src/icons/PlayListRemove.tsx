import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayListRemove = forwardRef(
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
          d="M15.964 4.634h-12v2h12v-2zM15.964 8.634h-12v2h12v-2zM3.964 12.634h8v2h-8v-2zM12.964 13.71l1.415-1.415 2.121 2.121 2.121-2.12 1.415 1.413-2.122 2.122 2.122 2.12-1.415 1.415-2.121-2.121-2.121 2.121-1.415-1.414 2.122-2.122-2.122-2.12z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PlayListRemove;
