import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GhostCharacter = forwardRef(
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
          d="M10.976 9a1 1 0 11-2 0 1 1 0 012 0zM13.971 10a1 1 0 100-2 1 1 0 000 2z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 21V10a7 7 0 10-14 0v11h2.828l1.415-1.414L10.657 21h2.686l1.414-1.414L16.172 21H19zm-2-11a5 5 0 00-10 0v9l2.243-2.243L12 19.515l2.757-2.758L17 19v-9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default GhostCharacter;
