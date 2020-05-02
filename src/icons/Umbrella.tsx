import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Umbrella = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 9a8 8 0 1116 0v2h-6.981v9.5a2.5 2.5 0 01-5 0v-2.643h2V20.5a.5.5 0 101 0V11H4V9zm8-6a6 6 0 016 6H6a6 6 0 016-6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Umbrella;
