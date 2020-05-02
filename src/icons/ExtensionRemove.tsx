import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ExtensionRemove = forwardRef(
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
          d="M12 11V5H4v14h14v-8h-6zM6 7h4v4H6V7zm4 6v4H6v-4h4zm6 0v4h-4v-4h4z"
          fill="currentColor"
        />
        <path d="M20 7h-6v2h6V7z" fill="currentColor" />
      </svg>
    );
  }
);
export default ExtensionRemove;
