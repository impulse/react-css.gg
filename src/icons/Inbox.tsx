import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Inbox = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 5a3 3 0 013-3h14a3 3 0 013 3v15a2 2 0 01-2 2H8.148a2.006 2.006 0 01-.148.005H4a2 2 0 01-2-2V5zm3-1h14a1 1 0 011 1v9h-4a2 2 0 00-2 2v1h-4v-.995a2 2 0 00-2-2H4V5a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Inbox;
