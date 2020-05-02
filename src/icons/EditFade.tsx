import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditFade = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 12c0-1.48.804-2.773 2-3.465v6.93A3.998 3.998 0 018 12z"
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeWidth={4}
      />
      <path
        d="M14 15.465v-6.93c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465z"
        stroke="currentColor"
        strokeOpacity={0.6}
        strokeWidth={4}
      />
      <path
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
});
export default EditFade;
