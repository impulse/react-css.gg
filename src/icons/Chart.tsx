import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Chart = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M22.775 8A9 9 0 0123 10h-9V1a9 9 0 018.775 7zm-2.067 0A6.999 6.999 0 0016 3.292V8h4.708z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 14a9 9 0 0111-8.775V12h6.775A9 9 0 111 14zm15.803 0H10V7.196A6.804 6.804 0 1016.803 14z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Chart;
