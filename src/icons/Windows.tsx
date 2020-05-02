import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Windows = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 5.548l7.195-.966v7.029l-7.188.054L3 5.55zm7.195 6.843v7.105l-7.19-.985v-6.12h7.19zm.918-7.935L20.998 3v8.533l-9.885.078V4.456zM21 12.505L20.998 21l-9.885-1.353v-7.142H21z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Windows;
