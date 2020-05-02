import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Notifications = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M20 7a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" />
      <path d="M12 6H4v14h14v-8h-2v6H6V8h6V6z" fill="currentColor" />
    </svg>
  );
});
export default Notifications;
