import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Attachment = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14 0a5 5 0 015 5v12a7 7 0 11-14 0V9h2v8a5 5 0 0010 0V5a3 3 0 10-6 0v12a1 1 0 102 0V6h2v11a3 3 0 11-6 0V5a5 5 0 015-5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Attachment;
