import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Redo = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.146 11.05l-.174-1.992 2.374-.208a5 5 0 10.82 6.173l2.002.5a7 7 0 11-1.315-7.996l-.245-2.803L18.6 4.55l.523 5.977-5.977.523z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Redo;
