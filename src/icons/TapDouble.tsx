import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const TapDouble = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.924 18v-4a3 3 0 00-6 0v4a3 3 0 106 0zm-3-9a5 5 0 00-5 5v4a5 5 0 0010 0v-4a5 5 0 00-5-5z"
        fill="currentColor"
      />
      <path
        d="M10.924 14a1 1 0 112 0v3h-2v-3zM11.924 1a9.97 9.97 0 017.105 2.963l-1.415 1.414A7.976 7.976 0 0011.924 3c-2.15 0-4.1.847-5.538 2.227L4.97 3.812A9.967 9.967 0 0111.924 1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.923 5a6.97 6.97 0 014.38 1.539l-1.426 1.426A4.978 4.978 0 0011.923 7c-1.075 0-2.071.34-2.886.917l-1.43-1.429A6.97 6.97 0 0111.924 5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default TapDouble;
