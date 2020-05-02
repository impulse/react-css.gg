import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MailOpen = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3.05 10.015a2 2 0 01.465-2.1L9.879 1.55a3 3 0 014.242 0l6.364 6.364a2 2 0 01.465 2.101c.032.099.05.204.05.313v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11a1 1 0 01.05-.313zm1.879-.687l6.364-6.363a1 1 0 011.414 0l6.364 6.363h-.03v.03l-6.334 6.334a1 1 0 01-1.414 0L4.929 9.328zm14.07 2.9l-4.878 4.879a3 3 0 01-4.242 0l-4.88-4.88v9.101h14v-9.1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MailOpen;
