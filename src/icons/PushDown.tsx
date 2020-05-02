import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 1h2v14.485l3.243-3.242 1.414 1.414L12 19.314l-5.657-5.657 1.414-1.414L11 15.485V1zM18 20.288H6v2h12v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PushDown;
