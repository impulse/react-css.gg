import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayTrackNextO = forwardRef(
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
          d="M12 21a9 9 0 110-18 9 9 0 010 18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm13-3a1 1 0 112 0v6a1 1 0 11-2 0V9zm-1 3l-6 3.464V8.536L13 12z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PlayTrackNextO;
