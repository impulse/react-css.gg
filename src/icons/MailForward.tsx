import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MailForward = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.638 15.529l1.414 1.414 4.95-4.95-4.95-4.95-1.414 1.415 2.498 2.498H7.998a4 4 0 00-4 4v2h2v-2a2 2 0 012-2h8.212l-2.572 2.573z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MailForward;
