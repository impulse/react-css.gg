import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MailReply = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10.362 15.529l-1.414 1.414-4.95-4.95 4.95-4.95 1.414 1.415-2.498 2.498h8.138a4 4 0 014 4v2h-2v-2a2 2 0 00-2-2H7.79l2.572 2.573z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MailReply;
