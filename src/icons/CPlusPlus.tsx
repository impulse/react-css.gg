import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CPlusPlus = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.207 16.278a6 6 0 11.071-8.485l1.414-1.414a8 8 0 10-.071 11.314l-1.414-1.415z"
        fill="currentColor"
      />
      <path
        d="M15 9h-2v2h-2v2h2v2h2v-2h2v-2h-2V9zM20 9h2v2h2v2h-2v2h-2v-2h-2v-2h2V9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CPlusPlus;
