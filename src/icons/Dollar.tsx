import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Dollar = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 19v3h2v-3h1a4 4 0 000-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 100 8h1v4H9v-2H7v4h4zm2-2h1a2 2 0 100-4h-1v4zm-2-6V7h-1a2 2 0 100 4h1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Dollar;
