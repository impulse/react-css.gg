import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Gitter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 1.5h2v13H5v-13zM9 4.5h2v18H9v-18zM15 4.5h-2v18h2v-18zM17 4.5h2v10h-2v-10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Gitter;
