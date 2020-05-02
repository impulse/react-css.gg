import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M1 13v-2h14.485l-3.242-3.243 1.414-1.414L19.314 12l-5.657 5.657-1.414-1.415L15.485 13H1zM20.288 6v12h2V6h-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PushRight;
