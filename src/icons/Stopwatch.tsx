import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Stopwatch = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18.621 2.55L21.45 5.38l-1.414 1.414-2.829-2.828 1.414-1.415zM12.822 8.6h-2v4h2v-4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.186 18.814A9 9 0 1017.914 6.086 9 9 0 005.186 18.814zm1.415-1.415A7 7 0 1016.5 7.5a7 7 0 00-9.9 9.9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Stopwatch;
