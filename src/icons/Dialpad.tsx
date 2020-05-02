import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Dialpad = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.5 3h3v3h-3V3zM5.5 8h3v3h-3V8zM5.5 13v3h3v-3h-3zM10.5 3h3v3h-3V3zM10.5 8v3h3V8h-3zM10.5 13h3v3h-3v-3zM10.5 18v3h3v-3h-3zM15.5 3h3v3h-3V3zM15.5 8v3h3V8h-3zM15.5 13h3v3h-3v-3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Dialpad;
